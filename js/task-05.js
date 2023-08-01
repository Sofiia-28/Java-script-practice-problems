const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

function putName(event) {
  inputName.value.trim();
  outputName.textContent = event.currentTarget.value || "Anonymous";
}

inputName.addEventListener("input", putName);