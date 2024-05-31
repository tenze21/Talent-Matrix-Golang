// opening and closing confirmation modal for the hire function
const confirmationModal = document.querySelector(".confirmation_modal");
const modalOpen = document.querySelector(".hire_btn");
const modalClose = document.querySelector(".cancel_btn");

modalOpen.addEventListener('click', ()=>{
    confirmationModal.showModal()
})

modalClose.addEventListener("click", () => {
  confirmationModal.close();
});

// opening and closing the review form
const reviewModal= document.querySelector('.review_modal');
const reviewModalOpen= document.querySelector('.rate_review');
const reviewModalClose= document.querySelector('#cancel_btn');

reviewModalOpen.addEventListener('click', ()=>{
    reviewModal.showModal();
})
reviewModalClose.addEventListener('click', ()=>{
    reviewModal.close();
})
