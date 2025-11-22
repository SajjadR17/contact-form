const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const subjectError = document.querySelector(".subject-error");
const messageError = document.querySelector(".message-error");
const seccussText = document.querySelector(".sent-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formValid = true;

  nameValid();
  emailValid();
  subjectValid();
  messageValid();
  seccuss();
});

function nameValid() {
  if (nameInput.value.length > 25 || nameInput.value.length < 5) {
    nameInput.classList.add("input-error");
    nameError.style.display = "block";
    nameError.textContent = "Name must be between 5-25";
    nameError.classList.add("error");
    formValid = false;
  } else {
    nameInput.classList.remove("input-error");
    nameError.style.display = "none";
    formValid = true;
  }
}

function emailValid() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(emailInput.value)) {
    emailInput.classList.add("input-error");
    emailError.style.display = "block";
    emailError.textContent = "Enter a valid email";
    emailError.classList.add("error");
    formValid = false;
  } else {
    emailInput.classList.remove("input-error");
    emailError.style.display = "none";
    formValid = true;
  }
}

function subjectValid() {
  if (subjectInput.value.length > 25 || subjectInput.value.length < 5) {
    subjectInput.classList.add("input-error");
    subjectError.style.display = "block";
    subjectError.textContent = "Subject must be between 5-25";
    subjectError.classList.add("error");
    formValid = false;
  } else {
    subjectInput.classList.remove("input-error");
    subjectError.style.display = "none";
    formValid = true;
  }
}

function messageValid() {
  if (messageInput.value.length < 1) {
    messageInput.classList.add("input-error");
    messageError.style.display = "block";
    messageError.textContent = "Enter your message";
    messageError.classList.add("error");
    formValid = false;
  } else {
    messageInput.classList.remove("input-error");
    messageError.style.display = "none";
    formValid = true;
  }
}

function seccuss() {
  if (formValid === true) {
    seccussText.style.display = "block";
    seccussText.textContent = "Form sent !";
    seccussText.classList.add("seccuss");
    setTimeout(() => {
      seccussText.style.display = "none";
    }, 3000);
  }
}
