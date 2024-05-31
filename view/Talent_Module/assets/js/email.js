var editButton = document.querySelector(".editButton");
var emailModal = document.getElementById("emailModal");
var emailValue = document.getElementById("emailValue");
var cancelButton = document.getElementById("cancel");
var saveButton = document.getElementById("save");
var closeButton = document.querySelector(".close");

function editEmail() {
  // Set the current email value in the modal input field
  document.getElementById("newEmail").value = emailValue.textContent;
  emailModal.style.display = "block";
}

cancelButton.addEventListener("click", () => {
  emailModal.style.display = "none";
});


window.addEventListener("click", (event) => {
  if (event.target === emailModal) {
    emailModal.style.display = "none";
  }
});

saveButton.addEventListener("click", () => {
  // Get the new email value
  const newEmail = document.getElementById("newEmail").value;

  // Update the email value
  emailValue.textContent = newEmail;

  // Close the modal
  emailModal.style.display = "none";
});