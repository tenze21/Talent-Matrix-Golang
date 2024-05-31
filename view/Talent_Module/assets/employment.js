const title=document.getElementById("title");
const company=document.getElementById("company");

const employmentModal=document.getElementById("employmentModal")
const employCancel=document.getElementById("cancelEm")
const employSubmit=document.getElementById("saveEm")

const newTitle=document.getElementById("newTitle")
const newCompany=document.getElementById("newCompany")

const from=document.getElementById("from")
const to_till=document.getElementById("to_till")

const new_date=document.getElementById("new_date")
const new_till=document.getElementById("new_till")
function editEmployment(){
    newTitle.value=title.textContent;
    newCompany.value=company.textContent;
    new_date.value=from.textContent;
    new_till.value=to_till.textContent;
    employmentModal.style.display="block";
}
window.addEventListener("click", (event) => {
    if (event.target === employmentModal) {
      employmentModal.style.display = "none";
    }
});
employCancel.addEventListener("click", () => {
    employmentModal.style.display = "none";
});

employSubmit.addEventListener("click", () => {
    from.textContent=new_date.value
    to_till.textContent=new_till.value
    title.textContent=newTitle.value;
    company.textContent=newCompany.value;
    employmentModal.style.display = "none";
});

