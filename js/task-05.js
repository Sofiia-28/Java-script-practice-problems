const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

function putName(event) {
  if (inputName === "") {
    outputName.textContent = "Anonymous";
  }
  outputName.textContent = event.currentTarget.value;
}

inputName.addEventListener("input", putName);
