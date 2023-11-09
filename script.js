let tasks = [];

function addTask() {
  const newTaskInput = document.getElementById("newTaskInput");
  const newTask = newTaskInput.value.trim();

  if (newTask !== "") {
    tasks.push({ text: newTask, isEditing: false });
    displayTasks();
    newTaskInput.value = "";
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

function editTask(index) {
  tasks[index].isEditing = true;
  displayTasks();
}

function saveTask(index) {
  const newText = document.getElementById(`editedTask${index}`).value;
  tasks[index].text = newText;
  tasks[index].isEditing = false;
  displayTasks();
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

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    if (task.isEditing) {
      // Display an input field for editing
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = task.text;
      editInput.id = `editedTask${index}`;
      editInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          saveTask(index);
        }
      });
      listItem.appendChild(editInput);
    } else {
      // Display the task text
      const taskText = document.createElement("span");
      taskText.textContent = task.text;
      listItem.appendChild(taskText);
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button"; // Apply the delete-button class
    deleteButton.onclick = function () {
      deleteTask(index);
    };
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
  });
}

// Add a function to handle Enter key press for adding tasks
document
  .getElementById("newTaskInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

// Initial display
displayTasks();
