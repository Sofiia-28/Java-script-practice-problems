const inputText = document.getElementById("validation-input");
const inputLength = Number(inputText.dataset.length);

function checkLength(event) {
  if (event.currentTarget.value.length >= inputLength) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
}

inputText.addEventListener("blur", checkLength);
