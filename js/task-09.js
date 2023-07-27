function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector(".change-color");
const colorNameRef = document.querySelector(".color");
const body = document.querySelector("body");
colorNameRef.textContent = "#ffffff";

function changeBackgroundColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorNameRef.textContent = getRandomHexColor();
}

buttonRef.addEventListener("click", changeBackgroundColor);
