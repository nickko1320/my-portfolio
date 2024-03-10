
const storedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
const todoList = [...storedTodoList];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<div class="todo-item ${todo.done ? 'done' : ''}">
                        <p>${todo.name}</p>
                        <div class="todo-buttons">
                            <button onclick="markAsDone(${i})">Mark as Done</button>
                            <button class="delete" onclick="deleteTodo(${i})">Delete</button>
                        </div>
                    </div>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    // Display task list in the console
    console.log("Task List:", todoList);
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value.trim();

    if (name === '') {
        showNotification('Please add a task!');
        return;
    }

    todoList.push({ name, done: false });
    saveToLocalStorage();

    inputElement.value = '';

    renderTodoList();
}

function markAsDone(index) {
    todoList[index].done = !todoList[index].done;
    saveToLocalStorage();
    renderTodoList();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    saveToLocalStorage();
    renderTodoList();
}

function showNotification(message) {
    alert(message);
}

function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}
