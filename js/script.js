{
  const tasks = [];

  const addNewTask = (addTask) => {
    tasks.push({ addTask });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const removeButtons = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const toggleDoneButtons = () => {
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
      <li 
       class="list__item">      
       <button class="button js-done">
        ${task.done ? "✔" : "?"}</button>

       <span class="list__task ${task.done ? "list__task--done" : ""}">
        ${task.addTask}</span>

       <button class="button button--remove js-remove ">X</button>
      </li>
    `;
    }

    document.querySelector(".js-list").innerHTML = htmlString;
    toggleDoneButtons();
    removeButtons();
  };

  const inputReset = (input) => {
    input.value = "";
    input.focus();
  };

  const onFormSumbit = (event) => {
    event.preventDefault();

    const input = document.querySelector(".js-addTask");
    inputFocus(input);

    const addTask = input.value.trim();
    if (addTask === "") {
      return;
    }
    addNewTask(addTask);
    inputReset(input);
  };

  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSumbit);
  };

  init();
}