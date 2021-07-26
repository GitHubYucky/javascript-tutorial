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

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input.value);
  add();
});

function add() {
  let todo_text = input.value;
  if (todo_text.length > 0) {
    const li = document.createElement("li");
    li.innerText = todo_text;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
  }
}
