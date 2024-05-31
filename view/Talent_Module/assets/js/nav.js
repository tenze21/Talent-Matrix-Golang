// toggling profile menu
const openProfileMenu= document.querySelector('.profile');
function toggleAriaExpanded(){
    const isExpanded= this.getAttribute('aria-expanded')==='true';
    this.setAttribute('aria-expanded', !isExpanded);
}
openProfileMenu.addEventListener('click', toggleAriaExpanded);

//hamburger menu functionality
const btnOpen= document.querySelector('#btnOpen');
const btnClose= document.querySelector('#btnClose');

btnOpen.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'true');
})

btnClose.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'false')
})

      