document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Add task event
    todoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const taskText = todoInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = ''; // Clear input field after adding task
        }
    });

    // Function to add a new task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('span');
        deleteButton.textContent = ' ❌';
        deleteButton.style.cursor = 'pointer';
        deleteButton.addEventListener('click', function() {
            li.remove(); // Remove task when delete button is clicked
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
