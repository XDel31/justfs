const form = document.querySelector("form");

function alimLocalStorage() {
  let todoItems = [];
  const todos = document.querySelectorAll(".todoItem");

  todos.forEach((todo) => {
    todoItems.push(todo.textContent);
  });

  localStorage.removeItem("todoList");
  localStorage.setItem("todoList", JSON.stringify(todoItems));
}

function createTodoItem(todo) {
  list.innerHTML += `<li class="todoItem">${todo}</li>`;
  alimLocalStorage();
}

if (localStorage.getItem("todoList").length > 0) {
  const localS = JSON.parse(localStorage.getItem("todoList"));

  localS.forEach((todo) => {
    createTodoItem(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createTodoItem(inputTodo.value);
  inputTodo.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
    alimLocalStorage();
  } else {
    e.target.classList.add("checked");
  }
});
