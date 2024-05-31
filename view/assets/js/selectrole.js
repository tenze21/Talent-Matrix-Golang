const talentContainer= document.querySelector('.talent');
const clientContainer= document.querySelector('.client');
const talentRadio=document.querySelector('#talent');
const clientRadio= document.querySelector('#client');
const form= document.querySelector('#role_select_form');
// const role= document.querySelector('#roles');

talentContainer.addEventListener('click',()=>{
    talentRadio.click();
    talentContainer.classList.add('checked');
    clientContainer.classList.remove('checked');
});

clientContainer.addEventListener('click',()=>{
    clientRadio.click();
    talentContainer.classList.remove('checked');
    clientContainer.classList.add('checked');
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const role = document.querySelector('input[name="role"]:checked').value;
    if (role==="talent"){
        window.location.href = "apply.html";
    }else{
        window.location.href = "clientRegister.html";
    }
})

