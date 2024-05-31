//for opening and closing the accordions
const disclosures=document.querySelectorAll(".js-disclosure");
const answers=document.querySelectorAll(".answer");

function toggleDisclosure(){
    const isExpanded= this.getAttribute('aria-expanded')==='true';
    this.setAttribute('aria-expanded', !isExpanded);
}

disclosures.forEach(component=>{
    component.dataset.state= 'ready';
    const disclosureButtons=component.querySelectorAll('.js_disclosure_btn');
    disclosureButtons.forEach(btn=>{
        btn.removeAttribute('title');
        btn.removeAttribute('disabled');

        btn.addEventListener('click', toggleDisclosure);
    })
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
