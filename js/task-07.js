const inputRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

function changeFontSize(event) {
  textRef.style.fontSize = `${event.target.value}px`;
}

inputRef.addEventListener("input", changeFontSize);
