// Modal PopUp
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");

const overlay = document.getElementById("overlay");

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) {
    return;
  }

  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) {
    return;
  }

  modal.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

const form = document.querySelector(".form");
const submitButton = form.querySelector('input[type="submit"]');

submitButton.addEventListener("click", function (e) {
  e.preventDefault(); // prevent the default form submission behavior

  const firstName = form.querySelector('input[name="first-name"]').value.trim();
  const lastName = form.querySelector('input[name="last-name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const phone = form.querySelector('input[name="phone"]').value.trim();
  const infor = form.querySelector('textarea[name="infor"]').value.trim();

  // Validate first name
  if (firstName === "") {
    alert("Please enter your first name.");
    return;
  }

  // Validate last name
  if (lastName === "") {
    alert("Please enter your last name.");
    return;
  }

  // Validate email
  if (email === "") {
    alert("Please enter your email address.");
    return;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert(
      "Please enter a valid email address (for example: imSoStupidIcantFillAnEmail@gmail.com)."
    );
    return;
  }

  // Validate phone number
  if (phone === "") {
    alert("Please enter your phone number.");
    return;
  } else if (!/^\d{10,11}$/.test(phone)) {
    alert("Please enter a valid 10 or 11-digit phone number.");
    return;
  }

  // Validate information
  if (infor === "") {
    alert("Please enter some information (So that we can make fun of you <3).");
    return;
  }

  // If all inputs are valid, submit the form
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", form.action);
  xhr.send(formData); // submit the form data asynchronously

  console.log({
    firstName,
    lastName,
    email,
    phone,
    infor,
  });

  const modal = document.querySelector(submitButton.dataset.modalTarget);
  openModal(modal); // open the modal

  form.reset(); // reset the form inputs
});