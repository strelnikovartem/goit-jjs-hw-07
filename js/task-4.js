const form = document.querySelector(".login-form");

form.addEventListener("submit", hendleSubmit);

function hendleSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  console.log(email);
  event.target.reset();
}
