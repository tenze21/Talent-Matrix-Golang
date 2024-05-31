const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirm_password");
const form = document.querySelector("#password_reset_form");
const success = document.querySelector(".success_message");

let isPasswordSecure = false,
  isConfirmPasswordValid = false;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isFormValid = isPasswordSecure && isConfirmPasswordValid;

  if (isFormValid) {
    form.style.display = "none";
    success.style.display = "flex";
  }
});

function showError(input, message) {
  const formField = input.parentElement;
  const error = formField.querySelector("small");
  error.textContent = message;
}

function hideError(input) {
  const formField = input.parentElement;
  const error = formField.querySelector("small");
  error.textContent = "";
}

passwordEl.addEventListener("input", () => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  if (!re.test(passwordEl.value)) {
    showError(
      passwordEl,
      "Please use atleats 8 characters including atleast 1 lowercase letter, 1 uppercase letter, 1 digit and 1 special character."
    );
  } else {
    isPasswordSecure=true;
    hideError(passwordEl);
  }
});

confirmPasswordEl.addEventListener("input", ()=>{
    if (!(confirmPasswordEl.value===passwordEl.value)){
        showError(confirmPasswordEl, "Password doesn't match");
    }else{
        isConfirmPasswordValid=true;
        hideError(confirmPasswordEl);
    }
})

//show and hide passoword logic
const showPassword = document.querySelector(".show_password_btn");
const showConfirmPassword = document.querySelector(".show_confirmpassword_btn");

showPassword.addEventListener("click", () => {
  showPassword.classList.toggle("bx-show");
  if (passwordEl.type == "password") {
    passwordEl.type = "text";
  } else {
    passwordEl.type = "password";
  }
});

showConfirmPassword.addEventListener("click", () => {
  showConfirmPassword.classList.toggle("bx-show");
  if (confirmPasswordEl.type == "password") {
    confirmPasswordEl.type = "text";
  } else {
    confirmPasswordEl.type = "password";
  }
});
