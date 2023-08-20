const addButton = document.getElementById('addButton');
const inputField = document.getElementById('inputField');
const list = document.getElementById('list');
const darkModeToggle = document.querySelector('.switch input');
const darkModeLabel = document.getElementById('dark');

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
savedTasks.forEach(task => {
    addTaskToList(task);
});

addButton.addEventListener('click', addTask);

document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;
    if (keyPressed === 'Enter') {
        addTask();
    }
});

function addTask() {
    if (inputField.value !== '') {
        const taskText = inputField.value;
        addTaskToList(taskText);
        inputField.value = '';
    }
}

function addTaskToList(taskText) {
    const newItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newItem.textContent = taskText;
    newItem.appendChild(checkbox);

    const removeButton = document.createElement('span');
    removeButton.textContent = '❌';
    removeButton.classList.add('remove-button');
    newItem.appendChild(removeButton);

    list.appendChild(newItem);

    removeButton.addEventListener('click', () => {
        newItem.remove();
        updateLocalStorage();
    });

    updateLocalStorage();
}

function updateLocalStorage() {
    const tasks = [];
    list.querySelectorAll('li').forEach(item => {
        tasks.push(item.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    if (darkModeLabel.textContent === 'Dark Mode') {
        body.style.backgroundColor = 'grey';
        darkModeLabel.textContent = 'Light Mode';
    } else {
        body.style.backgroundColor = 'whitesmoke';
        darkModeLabel.textContent = 'Dark Mode';
    }
}
