// events.js
let tasks = [];

function renderTasks(tasks) {
  // get the list element from the DOM
  // make sure it is empty
  // loop through the tasks array. for each of them we need to add the HTML markup for a todo.
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  tasks.forEach((task) => {
    listElement.innerHTML += `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
  });
}

function newTask() {
  // get the value entered into the #todo input
  // add it to our arrays tasks
  // render out the list.
  const task = document.querySelector("#todo").value;
  tasks.push({ detail: task, completed: false });
  renderTasks(tasks);
}

function removeTask(taskElement) {
  // note the use of Array.filter to remove the element from our task array
  tasks = tasks.filter(
      (task) => task.detail != taskElement.childNodes[1].innerText
  );
  // this line removes the HTML element from the DOM
  taskElement.remove();
  }

  function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(
      (task) => task.detail === taskElement.childNodes[1].innerText
    );
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    taskElement.classList.toggle("strike");
    console.log(tasks);
  }
  
  function manageTasks(e) {
    // did they click the delete or complete icon?
    console.log(e.target);
    const parent = e.target.closest("li");
    if (e.target.dataset.function === "delete") {
      removeTask(parent);
    }
    if (e.target.dataset.function === "complete") {
      completeTask(parent);
    }
  }

// we need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);