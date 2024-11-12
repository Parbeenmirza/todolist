// script.js

// Get the task list element
const taskList = document.getElementById("tasklist");

// Function to add a new task
function addTask() {
  // Get the input field value
  const taskInput = document.getElementById("inputTask");
  const taskValue = taskInput.value.trim();

  // Check if the input field is not empty
  if (taskValue !== "") {
    // Create a new list item
    const newTask = document.createElement("li");
    newTask.textContent = taskValue;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      // Remove the task from the list
      taskList.removeChild(newTask);
    };

    // Add the delete button to the task
    newTask.appendChild(deleteButton);

    // Add the task to the list
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
  }
}
