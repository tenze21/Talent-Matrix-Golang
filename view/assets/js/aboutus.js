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

const openLeaderModel = document.querySelectorAll('.view');
const closeLeaderModel = document.querySelectorAll('.close');
const leaderModel = document.querySelectorAll('.popup');

openLeaderModel.forEach((button, index) => {
  button.addEventListener('click', () => {
    leaderModel[index].showModal();
  });
});

closeLeaderModel.forEach((button, index) => {
  button.addEventListener('click', () => {
    leaderModel[index].close();
  });
});

//hamburger menu functionality
const btnOpen= document.querySelector('#btnOpen');
const btnClose= document.querySelector('#btnClose');

btnOpen.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'true');
})

btnClose.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'false')
})