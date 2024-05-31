// toggling profile menu
const openProfileMenu= document.querySelector('.profile');
function toggleAriaExpanded(){
    event.stopPropagation();
    const isExpanded= this.getAttribute('aria-expanded')==='true';
    this.setAttribute('aria-expanded', !isExpanded);
}
openProfileMenu.addEventListener('click', toggleAriaExpanded);
document.addEventListener('click', ()=>{
    if(openProfileMenu.getAttribute('aria-expanded')==='true'){
        openProfileMenu.setAttribute('aria-expanded', false);
    }
});

//hamburger menu functionality
/* This code snippet is handling the functionality of a hamburger menu. */
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