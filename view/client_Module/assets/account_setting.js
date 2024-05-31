// opening the profile editing form
const openModel1=document.querySelector('#edit_personal_info');
const personalInfoModal= document.querySelector('.personal_info_modal');
const closeModel1= document.querySelector('#cancel_btn');
const openModel2= document.querySelector('#edit_organization_info');
const organizationInfoModal= document.querySelector('.organization_info_modal');
const closeModel2= document.querySelector('.organization_info_modal #cancel_btn');

openModel1.addEventListener('click', ()=>{
  personalInfoModal.showModal();
  displayInitialValue();
})
closeModel1.addEventListener('click', ()=>{
  personalInfoModal.close();
})

openModel2.addEventListener('click', ()=>{
  organizationInfoModal.showModal();
  displayInitialValue();
})
closeModel2.addEventListener('click', ()=>{
  organizationInfoModal.close();
})
  // getting the initial values in the input fields
  function displayInitialValue(){
    const nameValue= document.querySelector('#nameValue');
    const emailValue= document.querySelector('#emailValue');
    const phone_numberValue= document.querySelector('#phone_numberValue');
    const regionValue= document.querySelector('#regionValue');
    const organization_nameValue= document.querySelector('#organization_nameValue');
    const dzongkhageValue= document.querySelector('#dzongkhagValue').innerText;

    const name=document.querySelector('#name');
    const email=document.querySelector('#email');
    const phone_number=document.querySelector('#phone_number');
    const region=document.querySelector('#region');
    const organization_name=document.querySelector('#organization_name');
    const dzongkhags=document.querySelectorAll('#dzongkhagOption');

    name.value=nameValue.innerText;
    email.value=emailValue.innerText;
    phone_number.value=phone_numberValue.innerText;
    region.value=regionValue.innerText;
    organization_name.value=organization_nameValue.innerText;

    dzongkhags.forEach(dzongkhag=>{
      if (dzongkhag.innerText===dzongkhageValue){
        dzongkhag.setAttribute('selected', true)
      }
    })

  }

  // updating profile picture
  const profile= document.querySelector('.default_profile');
  const profileInput= document.querySelector('#profile');
  profileInput.onchange=function(){
    profile.src=URL.createObjectURL(profileInput.files[0]);
  }

//   form validation for profile updation
const personalInfoForm= document.querySelector('#personal_info_edit');
const nameEl= document.querySelector('#name');
const phoneNumberEl= document.querySelector('#phone_number');
const regionEl= document.querySelector('#region');

let isNameValid=false;
let isphoneNumberValid=false;
let isRegionValid=false;
personalInfoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(isNameValid && isphoneNumberValid && isRegionValid){

    }
});

function showError(input, message){
    const formField= input.parentElement;
    const error=formField.querySelector("small");
    error.textContent= message;
}

function hideError(input){
    const formField= input.parentElement;
    const error=formField.querySelector("small");
    error.textContent="";
}
nameEl.addEventListener('input', ()=>{
    const re= /^[a-zA-Z\s]+(?:\s+[a-zA-Z\s]+)?$/;
    if(!re.test(nameEl.value)){
        showError(nameEl, "Name Cannot have numbers and special characters.");
    }else{
        isNameValid=true;
        hideError(nameEl);
    }
});

phoneNumberEl.addEventListener('input', ()=>{
    const re= /^(17|77)\d{6}$/;
    if(!re.test(phoneNumberEl.value)){
        showError(phoneNumberEl, "Invalid phone number.");
    }else{
        isphoneNumberValid=true;
        hideError(phoneNumberEl);
    }
});

regionEl.addEventListener('input', ()=>{
    const re= /^[a-zA-Z\s]+(?:\s+[a-zA-Z\s]+)?$/;
    if(!re.test(regionEl.value)){
        showError(regionEl, "Gewog or Thromde name cannot have numbers and special characters.");
    }else{
        isRegionValid=true;
        hideError(regionEl);
    }
});