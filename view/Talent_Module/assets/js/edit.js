// Get references to the elements
var emailElement = document.getElementById("email");
var editEmailElement = document.getElementById("email-edit");
var saveButton = document.getElementById("save");

// Set the initial value of the edit email input to the current email's inner text
editEmailElement.value = emailElement.innerText;



// Event listener for the save button
saveButton.addEventListener("click", function(event) {
    // Get the new email from the edit email input
    var newEmail = editEmailElement.value;

    // Update the email inner text if there's a change
    if (newEmail !== emailElement.innerText) {
        emailElement.innerText = newEmail;
    }
});
// var editSelect=document.getElementById("selected-options")
// var selected=document.getElementById("skill")

// for(var i=0,length=editSelect.childNodes.length;i<length;i++){
//     editSelect.childNodes[i].selected=true;
//     selected.appendChild(editSelect.childNodes[i].selected)
// }
