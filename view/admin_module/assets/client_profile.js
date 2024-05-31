const confirmationModal = document.querySelector(".confirmation_modal");
const modalOpen = document.querySelector("#delete_user_btn");
const modalClose = document.querySelector(".cancel");

modalOpen.addEventListener("click", () => {
    confirmationModal.showModal();
  });

modalClose.addEventListener("click", () => {
  confirmationModal.close();
});