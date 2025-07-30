const input = document.querySelector("#name-input");

input.addEventListener("input", handleClick);

function handleClick(evt) {
  console.log(evt.target.value);
}
