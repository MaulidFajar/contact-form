const radioBtns = document.querySelectorAll(".radio_btn");
const form = document.getElementById("form");
const submitBtn = document.querySelector(".submit_btn");
const emailInput = document.getElementById("email_input");
const emailErrorMsg = document.getElementById("email_error");
const firstNameErrorMsg = document.getElementById("firstname_error");
const lastNameErrorMsg = document.getElementById("lastname_error");
const userMsgErrorMsg = document.getElementById("user_msg_error");
const radioBtnError = document.getElementById("radio_btn_error");
const checkboxError = document.getElementById("checkbox_error");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const userMsg = document.getElementById("user_message");
const radioBtnWrapper = document.querySelectorAll(".radio_btn_wrapper");
const checkboxBtn = document.getElementById("checkbox_btn");
const successMsg = document.querySelector(".success_msg");

const isChecked = true;
checkboxBtn.checked = false;
let radioBtnValue = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkboxBtn.checked !== isChecked) {
    checkboxError.style.display = "block";
  } else {
    checkboxError.style.display = "none";
    emailValidation();
    handleFormInputs();
    handleTextArea();
    if (!radioBtnValue) {
      radioBtnError.style.display = "block";
    } else {
      radioBtnValue = "";
      radioBtnError.style.display = "none";
      showSuccessMsg(radioBtnValue);
    }
  }
});

function showSuccessMsg(dataInput) {
  if (dataInput) {
    successMsg.style.display = "block";
  }
}

function emailValidation() {
  const emailValue = emailInput.value;
  const validation =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!emailValue.match(validation)) {
    emailErrorMsg.style.display = "block";
    emailInput.classList.add("error_state");
  } else {
    showSuccessMsg(emailInput.value);
    emailInput.value = "";
    emailErrorMsg.style.display = "none";
    emailInput.classList.remove("error_state");
  }
}

function handleFormInputs() {
  const inputFirstName = firstName.value;
  const inputLastName = lastName.value;

  if (!inputFirstName && !inputLastName) {
    firstNameErrorMsg.style.display = "block";
    lastNameErrorMsg.style.display = "block";
    firstName.classList.add("error_state");
    lastName.classList.add("error_state");
  } else {
    showSuccessMsg(firstName.value);
    showSuccessMsg(lastName.value);
    firstName.value = "";
    lastName.value = "";
    firstNameErrorMsg.style.display = "none";
    lastNameErrorMsg.style.display = "none";
    firstName.classList.remove("error_state");
    lastName.classList.remove("error_state");
  }
}

radioBtns.forEach((radioBtn) => {
  radioBtn.checked = false;
  radioBtnValidation(radioBtn);
});

function radioBtnValidation(radioBtn) {
  radioBtn.addEventListener("click", () => {
    radioBtns.forEach((btn) => {
      btn.checked = false;
      btn.parentElement.style.backgroundColor = "var(--white)";
    });

    radioBtn.checked = true;
    radioBtnValue = radioBtn.value;
    radioBtn.parentElement.style.backgroundColor = `var(--light_green)`;
  });
}

function handleTextArea() {
  const userMsgValue = userMsg.value;

  if (!userMsgValue) {
    userMsgErrorMsg.style.display = "block";
    userMsg.classList.add("error_state");
  } else {
    userMsg.value = "";
    userMsgErrorMsg.style.display = "none";
    userMsg.classList.remove("error_state");
    showSuccessMsg(userMsgValue);
  }
}

emailInput.value = "";
firstName.value = "";
lastName.value = "";
userMsg.value = "";
radioBtnValue = "";
