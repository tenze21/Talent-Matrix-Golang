const Button = document.querySelector(".editButton");
const abtModal = document.getElementById("aboutModal");
const abtValue = document.getElementById("aboutValue");
const cancelbutton = document.getElementById("cancelg");
const savebutton = document.getElementById("saveg");

function editAbout() {
  // Set the current email value in the modal input field
  document.getElementById("newAbt").value = abtValue.textContent;
  abtModal.style.display = "block";
}

cancelbutton.addEventListener("click", () => {
  abtModal.style.display = "none";
});



window.addEventListener("click", (event) => {
  if (event.target === abtModal) {
    abtModal.style.display = "none";
  }
});

savebutton.addEventListener("click", () => {
  // Get the new email value
  const newAbt = document.getElementById("newAbt").value;

  // Update the email value
  abtValue.textContent = newAbt;

  // Close the modal
  abtModal.style.display = "none";
});