const form = document.querySelector(".login-form");

function login(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill in all the fields!");
    return
  }

  console.log({ Email: `${email.value}`, Password: `${password.value}` });

  event.currentTarget.reset();
}

form.addEventListener("submit", login);
