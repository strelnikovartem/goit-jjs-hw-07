const input = document.querySelector('[type = "number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick(event) {
  destroyBoxes();
  const inputValue = Number(input.value);

  if (inputValue < 1 || inputValue > 100) {
    return;
  }
  createBoxes(inputValue);
  input.value = "";
}

function onDestroyBtnClick(event) {
  destroyBoxes();
}

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.textContent = i + 1;
    elements.push(div);
  }
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
