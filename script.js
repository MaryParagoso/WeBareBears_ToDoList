let tasks = [];

function addTask() {
  const newTaskInput = document.getElementById("newTaskInput");
  const newTask = newTaskInput.value.trim();

  if (newTask !== "") {
    tasks.push(newTask);
    displayTasks();
    newTaskInput.value = "";
  }
<<<<<<< HEAD
=======
}

function enterKey(event) {
  if (event.key === "Enter") {
    addTask();
  }
>>>>>>> 72d2f9a9115cecfba2eda4e99bf0e52eb22a396f
}

function enterKey(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

function deleteTask(index) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (confirmDelete) {
    tasks.splice(index, 1);
    displayTasks();
  }
}

function clearAllTasks() {
  const confirmClear = window.confirm(
    "Are you sure you want to clear all tasks?"
  );

  if (confirmClear) {
    tasks = [];
    displayTasks();
  }
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
<<<<<<< HEAD
=======

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${task}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteTask(index);
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });

  const clearTaskButton = document.getElementById("clearTask");

  // Add a scroll event listener to show/hide the button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      // Show the button when scrolled down
      clearTaskButton.style.display = "block";
    }
  });
}

// Initial display
displayTasks();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
>>>>>>> 72d2f9a9115cecfba2eda4e99bf0e52eb22a396f

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${task}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteTask(index);
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}
