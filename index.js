// comment
// todo input form
// outfit
// show todo
// save todo
// erase todo
// end todo
const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input.value);
});
