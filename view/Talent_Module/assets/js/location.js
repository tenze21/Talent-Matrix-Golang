const edit1=document.getElementById("editButton")
const value1=document.getElementById("dzongkhagValue")
const value2=document.getElementById("gewogValue")
const locationModal=document.getElementById("locationModal")

const cancel = document.getElementById("cancelL");
const save = document.getElementById("saveL");

const newValue1=document.getElementById("newDzongkhag")
const newValue2=document.getElementById("newGewog")

function editLocation(){
    newValue1.value=value1.textContent;
    newValue2.value=value2.textContent;
    locationModal.style.display="block";
}

cancel.addEventListener("click", () => {
    locationModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === locationModal) {
      locationModal.style.display = "none";
    }
});

save.addEventListener("click",(event)=>{
    value1.textContent=newValue1.value;
    value2.textContent=newValue2.value;
    locationModal.style.display="none";
})