const form = document.querySelector(".login-form");

form.addEventListener("submit", hendleSubmit);

function hendleSubmit(event) {
  event.preventDefault();
  console.log("ok");
}
