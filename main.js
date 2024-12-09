// DOM Elements
const elements = {
  radioBtns: document.querySelectorAll(".radio_btn"),
  form: document.getElementById("form"),
  submitBtn: document.querySelector(".submit_btn"),
  emailInput: document.getElementById("email_input"),
  emailErrorMsg: document.getElementById("email_error"),
  firstNameErrorMsg: document.getElementById("firstname_error"),
  lastNameErrorMsg: document.getElementById("lastname_error"),
  userMsgErrorMsg: document.getElementById("user_msg_error"),
  radioBtnError: document.getElementById("radio_btn_error"),
  checkboxError: document.getElementById("checkbox_error"),
  firstName: document.getElementById("firstname"),
  lastName: document.getElementById("lastname"),
  userMsg: document.getElementById("user_message"),
  checkboxBtn: document.getElementById("checkbox_btn"),
  successMsg: document.querySelector(".success_msg"),
};

// Constants
const isChecked = false;
let radioBtnValue = "";

// Event Listeners
elements.form.addEventListener("submit", handleSubmit);
elements.radioBtns.forEach((radioBtn) => {
  radioBtn.checked = false;
  addRadioBtnListener(radioBtn);
});

// Functions
function handleSubmit(event) {
  event.preventDefault();

  resetErrors();

  if (!elements.checkboxBtn.checked) {
    showError(elements.checkboxError);
  } else {
    validateForm();
  }
}

function resetErrors() {
  hideError(elements.checkboxError);
  hideError(elements.radioBtnError);
}

function validateForm() {
  validateEmail();
  validateNameFields();
  validateUserMessage();
  validateRadioButtons();

  if (radioBtnValue) {
    showSuccessMsg(radioBtnValue);
    resetForm();
  }
}

function validateEmail() {
  const emailValue = elements.emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    showError(elements.emailErrorMsg, elements.emailInput);
  } else {
    hideError(elements.emailErrorMsg, elements.emailInput);
    showSuccessMsg(emailValue);
  }
}

function validateNameFields() {
  const firstName = elements.firstName.value.trim();
  const lastName = elements.lastName.value.trim();

  if (!firstName) showError(elements.firstNameErrorMsg, elements.firstName);
  else hideError(elements.firstNameErrorMsg, elements.firstName);

  if (!lastName) showError(elements.lastNameErrorMsg, elements.lastName);
  else hideError(elements.lastNameErrorMsg, elements.lastName);

  if (firstName) showSuccessMsg(firstName);
  if (lastName) showSuccessMsg(lastName);
}

function validateUserMessage() {
  const message = elements.userMsg.value.trim();

  if (!message) {
    showError(elements.userMsgErrorMsg, elements.userMsg);
  } else {
    hideError(elements.userMsgErrorMsg, elements.userMsg);
    showSuccessMsg(message);
  }
}

function validateRadioButtons() {
  if (!radioBtnValue) {
    showError(elements.radioBtnError);
  } else {
    hideError(elements.radioBtnError);
  }
}

function addRadioBtnListener(radioBtn) {
  radioBtn.addEventListener("click", () => {
    elements.radioBtns.forEach((btn) => {
      btn.checked = false;
      btn.parentElement.style.backgroundColor = "var(--white)";
    });

    radioBtn.checked = true;
    radioBtnValue = radioBtn.value;
    radioBtn.parentElement.style.backgroundColor = "var(--light_green)";
  });
}

function showError(errorElement, inputElement = null) {
  errorElement.style.display = "block";
  if (inputElement) inputElement.classList.add("error_state");
}

function hideError(errorElement, inputElement = null) {
  errorElement.style.display = "none";
  if (inputElement) inputElement.classList.remove("error_state");
}

function showSuccessMsg(data) {
  if (data) {
    elements.successMsg.style.display = "block";
    console.log("Success:", data); // Optional: Log success data
  }
}

function resetForm() {
  elements.emailInput.value = "";
  elements.firstName.value = "";
  elements.lastName.value = "";
  elements.userMsg.value = "";
  radioBtnValue = "";
}
