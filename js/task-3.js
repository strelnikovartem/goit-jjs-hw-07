const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handleClick);

function handleClick(evt) {
  const name = evt.target.value.trim();
  span.textContent = name === "" ? `Anonymous` : name;
}
