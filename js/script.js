const tasks = [
    {
      content: "nagrać lekcje",
      done: false,
    },
  ];
  
  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
      
    });
  
    clearInput();
    render();
  };
  
  const clearInput = () => {
    document.querySelector(".js-newTask").value = "";
  };
  
  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };
  
  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };
  
  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
  
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  
    const toggleDoneButtons = document.querySelectorAll(".js-done");
  
    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };
  
  const render = () => {
    let htmlString = "";
  
    for (const task of tasks) {
      htmlString += `
        <li class="list__item${task.done ? " list__item--done" : ""}">
          <button class="js-done">${task.done ? "&#128512;" : "&#129300;"}</button>
          <button class="js-remove">🗑</button>
          ${task.content}
        </li>
      `;
    }
  
    document.querySelector(".js-tasks").innerHTML = htmlString;
  
    bindEvents();
  };
  
  const onFormSubmit = (event) => {
    event.preventDefault();
  
    const newTaskInput = document.querySelector(".js-newTask");
    const newTaskContent = newTaskInput.value.trim();
  
    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
    }
  
    newTaskInput.value = "";
  };
  
  const init = () => {
    render();
  
    const form = document.querySelector(".js-form");
  
    form.addEventListener("submit", onFormSubmit);
  };
  
  init();
  