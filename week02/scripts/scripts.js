const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#________');
const li = document.createElement('li');
const deletebutton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);