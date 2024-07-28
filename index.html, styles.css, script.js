// Function to handle adding tasks
function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
        // Use alert to prompt the user to enter a task
        alert("Please enter a task.");
        return; // Exit the function if the task is empty
    }

    // Create a new li element
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Assign an onclick event to the remove button
    removeButton.onclick = function() {
        // Remove the li element from taskList
        taskList.removeChild(listItem);
    };

    // Append the remove button to the li element
    listItem.appendChild(removeButton);

    // Append the li to taskList
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = "";
}

// Function to handle keypress events in the task input field
function handleKeyPress(event) {
    // Check if the key pressed is "Enter"
    if (event.key === 'Enter') {
        addTask(); // Call addTask if "Enter" is pressed
    }
}

// Event listener for the "Add Task" button
addButton.addEventListener('click', addTask);

// Event listener for keypress in the task input field
taskInput.addEventListener('keypress', handleKeyPress);

// Event listener for DOMContentLoaded to initialize the task list
document.addEventListener('DOMContentLoaded', () => {
    // Invoke addTask if needed, though typically you'd use this to set up initial state
    // For this use case, addTask is usually called by the user action, not on load
});
// Initialize the tasks array
let tasks = [];

// Function to save tasks to Local Storage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return; 
    }

    // Add the new task to the tasks array
    if (!tasks.includes(taskText)) {
        tasks.push(taskText);
    }

    // Create a new li element for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Assign an onclick event to the remove button
    removeButton.onclick = function() {
        // Remove the li element from taskList
        taskList.removeChild(listItem);
        // Remove the task from the tasks array and update Local Storage
        removeTaskFromArray(taskText);
    };

    // Append the remove button to the li element
    listItem.appendChild(removeButton);

    // Append the li to taskList
    taskList.appendChild(listItem);

    // Save the updated tasks array to Local Storage
    saveTasksToLocalStorage();

    // Clear the task input field
    taskInput.value = "";
}

// Function to handle keypress events in the task input field
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask(); 
    }
}

// Function to remove a task from the tasks array
function removeTaskFromArray(taskText) {
    const index = tasks.indexOf(taskText);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    // Save the updated tasks array to Local Storage
    saveTasksToLocalStorage();
}

// Function to load tasks from Local Storage
function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks); // Initialize tasks array with stored data
        tasks.forEach(taskText => {
            // Create a new li element for each task
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                // Remove the li element from taskList
                taskList.removeChild(listItem);
                // Remove the task from the tasks array and update Local Storage
                removeTaskFromArray(taskText);
            };

            // Append the remove button to the li element
            listItem.appendChild(removeButton);

            // Append the li to taskList
            taskList.appendChild(listItem);
        });
    }
}

// Event listener for the "Add Task" button
addButton.addEventListener('click', addTask);

// Event listener for keypress in the task input field
taskInput.addEventListener('keypress', handleKeyPress);

// Event listener for DOMContentLoaded to initialize the task list
document.addEventListener('DOMContentLoaded', () => {
    // Load existing tasks from Local Storage and display them
    loadTasksFromLocalStorage();
});
