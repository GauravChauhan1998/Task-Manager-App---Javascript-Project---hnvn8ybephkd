// Create a unique ID for each task
let taskId = 0;

// Create a task
function createTask() {
  const taskInput = document.getElementById('taskInput');
  const taskDescription = taskInput.value;

  if (taskDescription.trim() !== '') {
    const task = document.createElement('div');
    task.setAttribute('class', 'task');
    task.setAttribute('id', `task${taskId}`);
    task.setAttribute('draggable', 'true');
    task.setAttribute('ondragstart', 'drag(event)');
    task.innerHTML = taskDescription;

    // Open modal to edit task description when the task is clicked
    task.addEventListener('click', () => openModal(task));

    document.getElementById('openSection').appendChild(task);
    taskInput.value = '';

    taskId++;
  }
}

// Drag and drop functionality
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function drop(event, section) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData('text/plain');
  const task = document.getElementById(taskId);

  // Move the task to the specified section
  document.getElementById(section + 'Section').appendChild(task);
}

// Modal functionality
function openModal(task) {
  const modal = document.getElementById('taskModal');
  const taskDescriptionInput = document.getElementById('taskDescription');
  const saveButton = document.querySelector('#taskModal button');

  // Set the current task description in the modal input
  taskDescriptionInput.value = task.innerHTML;

  // Save the updated task description when the Save button is clicked
  saveButton.onclick = () => {
    task.innerHTML = taskDescriptionInput.value;
    closeModal();
  };

  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('taskModal');
  modal.style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.getElementById('taskModal');
  if (event.target == modal) {
    closeModal();
  }
};
