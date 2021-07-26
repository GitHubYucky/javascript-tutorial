// comment
// todo input form
// outfit
// show todo
// save todo
// erase todo
// end todo
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    add(todo);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input.value);
  add();
});

function add(todo) {
  let todo_text = input.value;

  if (todo) {
    todo_text = todo.text;
  }

  if (todo_text) {
    const li = document.createElement("li");
    li.innerText = todo_text;
    li.classList.add("list-group-item");
    if (todo && todo.completed) {
      li.classList.add("text-decoration-line-through");
      saveData();
    }
    //  erase todo when rightclicked
    li.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      li.remove();
      saveData();
    });
    // strikethrough when clicked
    li.addEventListener("click", function (event) {
      event.preventDefault();
      li.classList.toggle("text-decoration-line-through");
      saveData();
    });

    ul.appendChild(li);
    input.value = "";
    saveData();
  }
}

function saveData() {
  const lists = document.querySelectorAll("li");
  let todos = [];

  lists.forEach((list) => {
    let todo = {
      text: list.innerText,
      completed: list.classList.contains("text-decoration-line-through"),
    };
    todos.push(todo);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
