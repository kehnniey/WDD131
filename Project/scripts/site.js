// Update current year and last modified date
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector("#menu");
    const navList = document.querySelector("#nav-list");

    if (menuButton && navList) {
        menuButton.addEventListener("click", () => {
            navList.classList.toggle("open");
            menuButton.classList.toggle("open");
        });
    }
});

// Workout Planner: Add and Remove Workouts
function addWorkout() {
    const workoutInput = document.getElementById('workout-input');
    const workoutList = document.getElementById('workout-list');
    const workoutText = workoutInput.value.trim();

    if (workoutText !== "") {
        const li = document.createElement('li');
        li.textContent = workoutText;
        const removeBtn = createRemoveButton(() => li.remove());
        li.appendChild(removeBtn);
        workoutList.appendChild(li);
        workoutInput.value = "";
    } else {
        alert("Please enter a workout!");
    }
}

// Create a remove button for list items
function createRemoveButton(removeAction) {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.onclick = removeAction;
    return removeBtn;
}

// Progress Tracker: Add and Remove Activities with Time Spent
function trackProgress() {
    const activity = document.getElementById('progress-input').value.trim();
    const time = document.getElementById('time-input').value.trim();
    const tableBody = document.querySelector('#progress-table tbody');

    if (activity === "" || time === "") {
        alert("Please fill in both fields!");
        return;
    }

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${activity}</td>
        <td>${time}</td>
        <td><button onclick="this.closest('tr').remove()">Remove</button></td>
    `;
    tableBody.appendChild(row);
    document.getElementById('progress-input').value = "";
    document.getElementById('time-input').value = "";
}

// Fitness Tips: Fetch a Random Tip
const tips = [
    "Stay hydrated during workouts.",
    "Warm up before exercising to prevent injury.",
    "Focus on form, not just speed or weight.",
    "Incorporate rest days into your routine.",
    "Eat a balanced diet rich in protein and fiber."
];

function loadTips() {
    const tipsContainer = document.getElementById('tips-container');
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipsContainer.textContent = randomTip;
}

// Workout Data in Local Storage
document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');
    const workoutList = document.getElementById('workout-list');

    const loadWorkouts = () => {
        const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
        workoutList.innerHTML = '';
        savedWorkouts.forEach((workout, index) => {
            const li = document.createElement('li');
            li.textContent = `${workout.type}: ${workout.exercise}`;
            const removeButton = createRemoveButton(() => removeWorkout(index));
            li.appendChild(removeButton);
            workoutList.appendChild(li);
        });
    };

    const saveWorkout = (event) => {
        event.preventDefault();
        const workoutType = document.getElementById('workout-type').value;
        const exercise = document.getElementById('exercise').value;

        const newWorkout = { type: workoutType, exercise: exercise };
        const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
        savedWorkouts.push(newWorkout);
        localStorage.setItem('workouts', JSON.stringify(savedWorkouts));

        loadWorkouts();
        workoutForm.reset();
    };

    const removeWorkout = (index) => {
        const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
        savedWorkouts.splice(index, 1);
        localStorage.setItem('workouts', JSON.stringify(savedWorkouts));
        loadWorkouts();
    };

    loadWorkouts();
    workoutForm.addEventListener('submit', saveWorkout);
});

// Progress Chart Handling
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const progressForm = document.getElementById('progress-form');

    const loadProgress = () => JSON.parse(localStorage.getItem('progress')) || [10, 20, 30, 40, 50];
    const saveProgress = (newProgress, monthIndex) => {
        const savedProgress = loadProgress();
        savedProgress[monthIndex] = newProgress;
        localStorage.setItem('progress', JSON.stringify(savedProgress));
    };

    const progress = loadProgress();
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May','June'],
            datasets: [{
                label: 'Fitness Progress',
                data: progress,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    progressForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const month = document.getElementById('month').value;
        const progressValue = parseInt(document.getElementById('progress').value);
        const monthIndex = ['January', 'February', 'March', 'April', 'May','June'].indexOf(month);

        saveProgress(progressValue, monthIndex);
        myChart.data.datasets[0].data[monthIndex] = progressValue;
        myChart.update();
        progressForm.reset();
    });
});

// Fitness Tips Management
document.addEventListener('DOMContentLoaded', () => {
    const tipsList = document.getElementById('tips-list');
    const addTipForm = document.getElementById('add-tip-form');
    const tipInput = document.getElementById('tip');
    const clearTipsButton = document.getElementById('clear-tips');

    const loadTips = () => {
        const savedTips = JSON.parse(localStorage.getItem('fitness-tips')) || [];
        tipsList.innerHTML = '';
        savedTips.forEach((tip, index) => {
            const li = document.createElement('li');
            li.textContent = tip;
            const removeButton = createRemoveButton(() => removeTip(index));
            li.appendChild(removeButton);
            tipsList.appendChild(li);
        });
    };

    const saveTips = (tips) => localStorage.setItem('fitness-tips', JSON.stringify(tips));

    const removeTip = (index) => {
        const savedTips = JSON.parse(localStorage.getItem('fitness-tips')) || [];
        savedTips.splice(index, 1);
        saveTips(savedTips);
        loadTips();
    };

    addTipForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newTip = tipInput.value.trim();
        if (newTip) {
            const savedTips = JSON.parse(localStorage.getItem('fitness-tips')) || [];
            savedTips.push(newTip);
            saveTips(savedTips);
            loadTips();
            addTipForm.reset();
        }
    });

    clearTipsButton.addEventListener('click', () => {
        localStorage.removeItem('fitness-tips');
        loadTips();
    });

    loadTips();
});
