//hamburger menu functionality
const btnOpen= document.querySelector('#btnOpen');
const btnClose= document.querySelector('#btnClose');

btnOpen.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'true');
})

btnClose.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'false')
})

//for opening the contact us model
const openContactModel=document.querySelector('#open-contact-modal');
const closeContactModal= document.querySelector('.close-contact-modal');
const contactModal= document.querySelector('#contact-modal');

openContactModel.addEventListener('click',()=>{
    contactModal.showModal();
});

closeContactModal.addEventListener('click',()=>{
    contactModal.close();
})

//for opening and closing feedback model
const openFeedbackModal= document.querySelector('#open-feedback-modal');
const closeFeedbackModal= document.querySelector('.close-feedback-modal');
const feedbackModal= document.querySelector('.feedback-modal');

openFeedbackModal.addEventListener('click', ()=>{
    feedbackModal.showModal();
});

closeFeedbackModal.addEventListener('click', ()=>{
    feedbackModal.close()
});

// opening and closing login/register modal for the hire function
const confirmationModal = document.querySelector(".login_register_modal");
const modalOpen = document.querySelector(".hire_btn");
const modalClose = document.querySelector(".close_login_register_modal");

modalOpen.addEventListener('click', ()=>{
    confirmationModal.showModal()
})

modalClose.addEventListener("click", () => {
  confirmationModal.close();
});