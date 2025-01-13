document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false indicates no need to save again to local storage when loading existing tasks
    }

    // Function to add a new task (with localStorage saving)
    function addTask(taskText, save = true) {

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
            removeTaskFromLocalStorage(taskText)
        };


        // Append button to list item and list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
         taskInput.value = '';

        // Save to Local Storage (only when adding a new task)
        if (save) {
            saveTaskToLocalStorage(taskText);
        }
    }


     // Function to save task to local storage
     function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove task from local storage
    function removeTaskFromLocalStorage(taskText){
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText)
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Add event listener for button click
    addButton.addEventListener('click', function (){
       addTask(taskInput.value.trim())
    });

    // Add event listener for enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim());
        }
    });

      // Load tasks from Local Storage on page load
    loadTasks();
});