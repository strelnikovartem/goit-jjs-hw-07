const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  const randomColor = getRandomHexColor();
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
