document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
  


// JavaScript for handling mobile menu toggle
function toggleMenu() {
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("show");
}

// Adding event listener to handle page load and other features
document.addEventListener("DOMContentLoaded", () => {
    // You could initialize any dynamic features here if needed
});

function toggleMenu() {
    const navList = document.getElementById('nav-list');
    const closeIcon = document.getElementById('close-icon');
    const menuIcon = document.getElementById('menu-icon');
    
    // Toggle the visibility of the nav list
    if (navList.style.display === 'block') {
        navList.style.display = 'none';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        navList.style.display = 'block';
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}


// document.addEventListener("DOMContentLoaded", function () {
//     const hamButton = document.querySelector("#menu-icon"); // Hamburger button
//     const navigation = document.querySelector("#nav-list"); // Navigation menu
//     const closeIcon = document.querySelector("#close-icon"); // Close icon

//     if (hamButton && navigation && closeIcon) {
//         hamButton.addEventListener("click", () => {
//             // Toggle the 'active' class to open the navigation and show the close icon
//             navigation.classList.toggle("active");
//             closeIcon.classList.toggle("active");
//             hamButton.classList.toggle("active");
//         });

//         // Close the menu when the close icon is clicked
//         closeIcon.addEventListener("click", () => {
//             navigation.classList.remove("active");
//             closeIcon.classList.remove("active");
//             hamButton.classList.remove("active");
//         });
//     }
// });



// Workout Planner: Add and Remove Workouts
function addWorkout() {
    const workoutInput = document.getElementById('workout-input');
    const workoutList = document.getElementById('workout-list');
    if (workoutInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = workoutInput.value;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => li.remove();
        li.appendChild(removeBtn);
        workoutList.appendChild(li);
        workoutInput.value = "";
    } else {
        alert("Please enter a workout!");
    }
}

// Progress Tracker: Add and Remove Activities with Time Spent
function trackProgress() {
    const activity = document.getElementById('progress-input').value;
    const time = document.getElementById('time-input').value;
    const tableBody = document.querySelector('#progress-table tbody');

    if (activity.trim() === "" || time.trim() === "") {
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

// Workout
document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');
    const workoutList = document.getElementById('workout-list');

    // Load saved workouts from localStorage
    const loadWorkouts = () => {
        const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
        workoutList.innerHTML = '';
        savedWorkouts.forEach((workout, index) => {
            const li = document.createElement('li');
            li.textContent = `${workout.type}: ${workout.exercise}`;
            
            // Create remove button for each workout
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.dataset.index = index;
            removeButton.addEventListener('click', removeWorkout);
            li.appendChild(removeButton);

            workoutList.appendChild(li);
        });
    };

    // Save workout to localStorage
    const saveWorkout = (event) => {
        event.preventDefault();

        const workoutType = document.getElementById('workout-type').value;
        const exercise = document.getElementById('exercise').value;

        const newWorkout = { type: workoutType, exercise: exercise };
        const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
        savedWorkouts.push(newWorkout);
        localStorage.setItem('workouts', JSON.stringify(savedWorkouts));

        loadWorkouts(); // Reload the workouts list
        workoutForm.reset(); // Clear the form fields
    };

    // Remove workout from localStorage
    const removeWorkout = (event) => {
        const index = event.target.dataset.index;
        const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
        savedWorkouts.splice(index, 1); // Remove the workout from the array
        localStorage.setItem('workouts', JSON.stringify(savedWorkouts));

        loadWorkouts(); // Reload the workouts list after removal
    };

    // Load workouts on page load
    loadWorkouts();

    // Add event listener for form submission
    workoutForm.addEventListener('submit', saveWorkout);
});


// Progress

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const progressForm = document.getElementById('progress-form');
    
    // Load progress data from localStorage
    const loadProgress = () => {
        const progressData = JSON.parse(localStorage.getItem('progress')) || [10, 20, 30, 40, 50];
        return progressData;
    };

    // Save progress data to localStorage
    const saveProgress = (newProgress, monthIndex) => {
        const savedProgress = JSON.parse(localStorage.getItem('progress')) || [10, 20, 30, 40, 50];
        savedProgress[monthIndex] = newProgress;
        localStorage.setItem('progress', JSON.stringify(savedProgress));
    };

    // Initialize chart with data
    const progress = loadProgress();
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
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

    // Handle form submission for progress
    progressForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const month = document.getElementById('month').value;
        const progressValue = parseInt(document.getElementById('progress').value);
        
        const monthIndex = ['January', 'February', 'March', 'April', 'May'].indexOf(month);
        
        // Save new progress and update chart
        saveProgress(progressValue, monthIndex);
        myChart.data.datasets[0].data[monthIndex] = progressValue;
        myChart.update();  // Update the chart with new data
        
        // Clear form after submission
        progressForm.reset();
    });
});

// Tips
ddocument.addEventListener('DOMContentLoaded', () => {
    const tipsList = document.getElementById('tips-list');
    const addTipForm = document.getElementById('add-tip-form');
    const tipInput = document.getElementById('tip');
    const clearTipsButton = document.getElementById('clear-tips');
    const fitnessGoalForm = document.getElementById('fitness-goal-form');
    const goalTypeInput = document.getElementById('goal-type');
    const goalValueInput = document.getElementById('goal-value');

    // Load saved tips from localStorage
    const loadTips = () => {
        const savedTips = JSON.parse(localStorage.getItem('fitness-tips')) || [
            'Stay hydrated during your workouts.',
            'Set realistic goals and track your progress.',
            'Rest and recovery are just as important as training.'
        ];
        tipsList.innerHTML = '';
        savedTips.forEach((tip, index) => {
            const li = document.createElement('li');
            li.textContent = tip;
            // Add remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-tip');
            removeButton.dataset.index = index;
            removeButton.addEventListener('click', removeTip);
            li.appendChild(removeButton);
            tipsList.appendChild(li);
        });
    };

    // Save tips to localStorage
    const saveTips = (tips) => {
        localStorage.setItem('fitness-tips', JSON.stringify(tips));
    };

    // Remove a tip
    const removeTip = (event) => {
        const index = event.target.dataset.index;
        const savedTips = JSON.parse(localStorage.getItem('fitness-tips')) || [];
        savedTips.splice(index, 1); // Remove the selected tip
        saveTips(savedTips);
        loadTips(); // Reload the list
    };

    // Add a new tip
    addTipForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newTip = tipInput.value.trim();
        if (newTip) {
            const savedTips = JSON.parse(localStorage.getItem('fitness-tips')) || [];
            savedTips.push(newTip);
            saveTips(savedTips);
            loadTips(); // Reload the list with the new tip
            addTipForm.reset(); // Clear the form input
        }
    });

    // Clear all tips
    clearTipsButton.addEventListener('click', () => {
        localStorage.removeItem('fitness-tips');
        loadTips(); // Reload the list (now empty)
    });

    // Fitness goal form submission
    fitnessGoalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const goalType = goalTypeInput.value;
        const goalValue = goalValueInput.value;
        alert(`Your goal is to ${goalType} ${goalValue}.`);
    });

    // Initial load of tips
    loadTips();
});

// Wait for the page to fully load
window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    
    // Example data (this could be replaced with user input or dynamic data)
    var progressData = {
        labels: ['January', 'February', 'March', 'April', 'May'],  // Months
        datasets: [{
            label: 'Progress (%)',
            data: [45, 60, 75, 50, 90],  // Example progress percentages
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
            borderColor: 'rgba(54, 162, 235, 1)',     // Border color
            borderWidth: 1
        }]
    };

    // Chart configuration
    var config = {
        type: 'bar',  // Bar chart type
        data: progressData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true
        }
    };

    // Create the chart
    new Chart(ctx, config);
};

// Assuming a form is used to collect progress data
document.getElementById('progress-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get data from form
    var month = document.getElementById('month').value;
    var progress = document.getElementById('progress').value;

    // Update the chart data
    progressData.labels.push(month);  // Add the new month to labels
    progressData.datasets[0].data.push(progress);  // Add the progress percentage

    // Update the chart to reflect the new data
    myChart.update();
});



