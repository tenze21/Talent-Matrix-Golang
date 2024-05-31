const form= document.querySelector('#verification_form');
const inputs= document.querySelectorAll('#verification_code');
const button= document.querySelector('#next_btn');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    window.location.href ="../passwordreset.html";
})

inputs.forEach((input, index1)=>{
    input.addEventListener('keyup', (e)=>{
        const currentInput=input,
         nextInput=input.nextElementSibling,
         prevInput=input.previousElementSibling;

         if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value!==""){
             nextInput.removeAttribute("disabled");
             nextInput.focus();
         }

         if(e.key==="Backspace"){
            inputs.forEach((input, index2)=>{
                if(index1<=index2 && prevInput){
                    input.setAttribute("disabled", true);
                    input.value="";
                    prevInput.focus();
                }
            })
         }

         if (!inputs[3].disabled && inputs[3].value !== ""){
            button.classList.add("active");
            return;
         }
         button.classList.remove("active");
    });
});

window.addEventListener("load", ()=>{
    inputs[0].focus();
})