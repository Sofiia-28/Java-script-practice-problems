const inputText = document.getElementById("validation-input");
const inputLength = Number(inputText.dataset.length);

function checkLength(event) {
  if (event.currentTarget.value.length === inputLength) {
    changeClass("invalid", "valid");
  } else {
    changeClass("valid", "invalid")
  }
}

function changeClass(a, b) {
  inputText.classList.remove(a);
  inputText.classList.add(b);
}

inputText.addEventListener("blur", checkLength);



