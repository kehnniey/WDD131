const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapterButton');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.style.marginLeft = '10px';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });

        input.value = '';
        input.focus();
    }
});
