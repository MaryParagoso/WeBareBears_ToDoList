let tasks = [];

function addTask() {
  const newTaskInput = document.getElementById("newTaskInput");
  const newTask = newTaskInput.value.trim();

  if (newTask !== "") {
    const randomColor = getRandomColor();
    tasks.push({ text: newTask, color: randomColor });
    displayTasks();
    newTaskInput.value = "";

    const clearAllButton = document.getElementById("clearAllButton");
    clearAllButton.style.display = "block";
  }
  saveTasksToLocalStorage();
}

function enterKey(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

function getRandomColor() {
  const opacity = 0.7;
  const randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  return `rgba(${parseInt(randomColor.slice(-6, -4), 16)}, ${parseInt(
    randomColor.slice(-4, -2),
    16
  )}, ${parseInt(randomColor.slice(-2), 16)}, ${opacity})`;
}

function deleteTask(index) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (confirmDelete) {
    tasks.splice(index, 1);
    displayTasks();

    if (tasks.length === 0) {
      const clearAllButton = document.getElementById("clearAllButton");
      clearAllButton.style.display = "none";
    }
  }
  saveTasksToLocalStorage();
}

function clearAllTasks() {
  const confirmClear = window.confirm(
    "Are you sure you want to clear all tasks?"
  );

  if (confirmClear) {
    tasks = [];
    displayTasks();

    const clearAllButton = document.getElementById("clearAllButton");
    clearAllButton.style.display = "none";
  }
  saveTasksToLocalStorage();
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  const noTaskMessage = document.getElementById("noTaskMessage");
  const clearAllButton = document.getElementById("clearAllButton");
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    noTaskMessage.style.display = "block"; // Show the message if no tasks
    clearAllButton.style.display = "none"; // Hide the "Clear All" button if no tasks
  } else {
    noTaskMessage.style.display = "none";
    clearAllButton.style.display = "block"; // Display the "Clear All" button if there are tasks

    tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = task.text;
      listItem.style.backgroundColor = task.color;

      const deleteButton = document.createElement("button");
      const deleteIcon = document.createElement("i");
      deleteIcon.className = "fas fa-times";
      deleteButton.className = "delete-button";
      deleteButton.onclick = function () {
        deleteTask(index);
      };
      deleteButton.appendChild(deleteIcon);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
    });
  }
}

//retrieve tasks from local storage
function getTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    displayTasks();
  }
}

//save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//retrieve tasks when the page loads
window.addEventListener("load", getTasksFromLocalStorage);
