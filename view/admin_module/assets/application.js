// projects tab functionality
const tabContainer = document.querySelector(".tabs_container");
const tabList=document.querySelector(".tab_list");
const tabButtons = document.querySelectorAll(".tab_button");
const tabPanels = document.querySelectorAll(".wrapper");

tabList.setAttribute("role", "tablist");

tabList.querySelectorAll("li").forEach((listitem)=>{
    listitem.setAttribute("role", "presentation");
})
tabButtons.forEach((tab, index) => {
    tab.setAttribute("role", "tab");
  if (index === 0) {
    tab.setAttribute("aria-selected", "true");
  } else {
    tabPanels[index].setAttribute("hidden", "");
  }
});

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (e) => {
    e.preventDefault();
    switchTab(tabButton);
  });
});

function switchTab(newTab) {
  const activePanelId = newTab.getAttribute("href");
  const activePanel = tabContainer.querySelector(activePanelId);

  tabButtons.forEach((button)=>{
    button.setAttribute("aria-selected", "false");
  })
  tabPanels.forEach((panel) => {
    panel.setAttribute("hidden", true);
  });
  activePanel.removeAttribute("hidden");
  newTab.setAttribute("aria-selected", "true");
}

// for opening and closing comfirmation modal for shortlisting talent
const shortlistConfirmationModal = document.querySelector(".confirmation_modal_shortlist");
const modalOpen = document.querySelectorAll(".shortlist");
const modalClose = shortlistConfirmationModal.querySelector(".cancel_btn");

modalOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    shortlistConfirmationModal.showModal();
  });
});

modalClose.addEventListener("click", () => {
  shortlistConfirmationModal.close();
});

// for opening and closing comfirmation modal for shortlisting talent
const approveConfirmationModal = document.querySelector(".confirmation_modal_approve");
const approveModalOpen = document.querySelectorAll(".approve");
const approveModalClose = approveConfirmationModal.querySelector(".cancel_btn");

approveModalOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    approveConfirmationModal.showModal();
  });
});

approveModalClose.addEventListener("click", () => {
  approveConfirmationModal.close();
});