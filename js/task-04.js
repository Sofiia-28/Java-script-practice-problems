let counterValue = 0;
const value = document.getElementById("value");
const buttonDe = document.querySelector('button[data-action="decrement"]');
const buttonIn = document.querySelector('button[data-action="increment"]');

function decrement(event) {
    counterValue -= 1;
    value.textContent = counterValue;
}

function increment(event) {
    counterValue += 1;
    value.textContent = counterValue;
}

buttonDe.addEventListener("click", decrement);
buttonIn.addEventListener("click", increment);
