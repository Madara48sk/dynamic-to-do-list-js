document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim task input
        let taskText = taskInput.value.trim();

        // Check if task text is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add click event to remove the list item
         removeButton.onclick = function() {
            taskList.removeChild(listItem);
          };

        // Append button to list item and list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Add event listener for button click
    addButton.addEventListener('click', addTask);

    // Add event listener for enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});