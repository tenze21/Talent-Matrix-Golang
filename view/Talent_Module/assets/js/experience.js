const experience = document.getElementById("experiencevalue");
const newOption = document.getElementById("newOption");
const experienceModal = document.getElementById("experienceModal");

const experienceCancel = document.getElementById("cancelE");
const experienceSave = document.getElementById("saveE");

function editExperienceYear() {
    newOption.value=experience.textContent;

  experienceModal.style.display = "block";
}

window.addEventListener("click", (event) => {
  if (event.target === experienceModal) {
    experienceModal.style.display = "none";
  }
});

experienceCancel.addEventListener("click", () => {
  experienceModal.style.display = "none";
});

experienceSave.addEventListener("click", (event) => {
  // No need for separate conditions
  experience.textContent = newOption.value;

  experienceModal.style.display = "none";
});
