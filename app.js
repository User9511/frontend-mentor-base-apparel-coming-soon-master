const submitBtn = document.getElementById("submit-btn");
const error = document.getElementById("error");
const errorSvg = document.getElementById("error-svg");

const inputEl = document.getElementById("email");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitBtn.addEventListener("click", function () {
  if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
    error.style.display = "inline";
    errorSvg.style.display = "inline";
    error.textContent = "Please provide a valid email address";
  } else {
    error.style.display = "inline";
    error.style.color = "green";
    error.textContent = "Thank you for subscribing to our newsletter!";
  }
});
