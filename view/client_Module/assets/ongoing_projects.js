const confirmationModal = document.querySelector(".confirmation_modal");
const modalOpen = document.querySelectorAll(".open_confirmation_modal");
const modalClose = document.querySelector(".cancel");

modalOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    confirmationModal.showModal();
  });
});

modalClose.addEventListener("click", () => {
  confirmationModal.close();
});
