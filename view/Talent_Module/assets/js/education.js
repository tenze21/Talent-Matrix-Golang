// const schoolValue=document.getElementById("school")
// const newSchool=document.getElementById("newSchool")
// const fields=document.getElementById("field_of_study")
// const newFields=document.getElementById("newStudy")
// const educationModal=document.getElementById("educationModal")

// const date_from=document.getElementById("date_from")
// const date_till=document.getElementById("date_till")

// const newDate=document.getElementById("newDate")
// const newTill=document.getElementById("newTill")

// const EducationCancel=document.getElementById("cancelED")
// const EducationSubmit=document.getElementById("submitED")

// function editEducation(){
//     newSchool.value=schoolValue.textContent
//     newFields.value=fields.textContent

//     educationModal.style.display="block";
// }

// window.addEventListener("click", (event) => {
//     if (event.target === educationModal) {
//       educationModal.style.display = "none";
//     }
// });
// EducationCancel.addEventListener("click", () => {
//     educationModal.style.display = "none";
// });
// EducationSubmit.addEventListener("click", () => {
//     schoolValue.textContent=newSchool.value;
//     fields.textContent=newFields.value;
    

//     date_from.textContent = newDate.value;
//     date_till.textContent=newTill.value;
  
//     educationModal.style.display = "none";
// });
const schoolValue = document.getElementById("school");
const newSchool = document.getElementById("newSchool");
const fields = document.getElementById("field_of_study");
const newFields = document.getElementById("newStudy");
const educationModal = document.getElementById("educationModal");

const date_from = document.getElementById("date_from");
const date_till = document.getElementById("date_till");

const newDate = document.getElementById("newDate");
const newTill = document.getElementById("newTill");

const EducationCancel = document.getElementById("cancelED");
const EducationSubmit = document.getElementById("saveED");

function editEducation() {
  newSchool.value = schoolValue.textContent;
  newFields.value = fields.textContent;

  educationModal.style.display = "block";
}

window.addEventListener("click", (event) => {
  if (event.target === educationModal) {
    educationModal.style.display = "none";
  }
});

EducationCancel.addEventListener("click", () => {
  educationModal.style.display = "none";
});

EducationSubmit.addEventListener("click", () => {
  schoolValue.textContent = newSchool.value;
  fields.textContent = newFields.value;

  // Handle dates (consider your specific requirements):
  date_from.textContent = newDate.value; // Assuming newDate.value provides a valid date string
  date_till.textContent = newTill.value;  // Assuming newTill.value provides a valid date string

  // You might want to consider additional date formatting or validation here

  educationModal.style.display = "none";
});
