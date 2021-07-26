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
    todo_text = todo;
  }

  if (todo_text.length > 0) {
    const li = document.createElement("li");
    li.innerText = todo_text;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
    saveData();
  }
}
function saveData() {
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach((list) => {
    todos.push(list.innerText);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
