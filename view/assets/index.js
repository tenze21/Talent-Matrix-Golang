var CategorySlider = new Swiper(".category-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const initTestimonilSlider=()=>{
  const slideBtns= document.querySelectorAll(".slide-button");
  const testimonialList= document.querySelector(".testimonial-list");
  const sliderWrapper=document.querySelector(".slider_wrapper");
  const maxScrollLeft= sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
  
  slideBtns.forEach(button=>{
    button.addEventListener('click', ()=>{
      const direction= button.id==="prev-slide"? -1 : 1;
      const scrollAmount= sliderWrapper.clientWidth * direction;
      console.log(scrollAmount);
      sliderWrapper.scrollBy({left: scrollAmount, behavior:"smooth"})
    })
  });
}
window.addEventListener("resize", initTestimonilSlider);
window.addEventListener("load", initTestimonilSlider);

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

//hamburger menu functionality
const btnOpen= document.querySelector('#btnOpen');
const btnClose= document.querySelector('#btnClose');

btnOpen.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'true');
})

btnClose.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'false')
})

// search input redirect
// const searchInput = document.querySelector('#search_input');
// const search= document.querySelector('#search');

// searchInput.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   if(search.value.trim()!==''){
//     window.location.href=`../search.html`
//   }
// })
// window.addEventListener('load',()=>{
//   search.value='';
// })


// Search suggestions logic
const options = [
  "Machine Learning",
  "Natural Language Processing",
  "Neural Networks",
  "Deep Learning",
  "Reinforcement Learning",
  "Autonomous Systems",
  "Drawing",
  "Painting",
  "Digital Art",
  "Sculpture",
  "Photography",
  "Photo Editing",
  "Illustration",
  "Fashion Design",
  "Textile Design",
  "Pattern Making",
  "Model Casting",
  "Fashion Marketing",
  "Brand Management",
  "Fashion Photography",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Indesign",
  "Typography",
  "Logo Design",
  "Branding",
  "Layout Design",
  "Motion Graphics",
  "UI/UX Design",
  "User Centered Design",
  "Music Production",
  "Audio Engineering",
  "Song Writing",
  "Sound Editing",
  "Voiceover",
  "Python",
  "Java",
  "C++",
  "Operating Systems",
  "Angular",
  "React",
  "Golang",
  "Next js",
  "Data Structure & Algorithm",
  "Cloud Computing",
  "Server Management",
  "Ruby",
  "GraphQl",
  "Network Management",
  "Ethical Hacking",
  "Cyber Security",
  "Digital Marketing",
  "Social Media Marketing",
  "Content Marketing",
  "Search Engine Optimization",
  "Market Research",
  "Sales Strategy",
  "Customer Relationship Management",
  "Advertising",
  "3D Modeling",
  "Video Editing",
  "Visual Effects",
  "Character Design",
  "Cinematography",
  "Animation",
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "Mobile App Development (iOS/Android)",
  "Responsive Design",
  "DevOps",
  "Copywriting",
  "Creative Writing",
  "Technical Writing",
  "Editing & Proofreading",
  "Translation (various languages)",
  "Content Creation",
  "Scriptwriting",
  "Transcreation",
  "Carpentry",
  "Music & Audio",
  "Artificial Intelligence",
  "Blockchain Technology",
  "Graphics Design",
  "Web Design"
];

const searchInput= document.querySelector('#search');
const resultDisplay= document.querySelector('.search_box');

searchInput.onkeyup= function(){
  resultDisplay.style.display='block';
  let result=[];
  let input= searchInput.value;
  if(input){
      result= options.filter((option)=>{
      return option.toLowerCase().includes(input.toLowerCase());
    })
  }
  display(result);
}

function display(result){
  const content=result.map((list)=>{
    return "<li onclick=selectInput(this)>"+ list + "</li>";
  })
  resultDisplay.innerHTML="<ul>"+ content.join('') +"</ul>";
}

function selectInput(list){
  searchInput.value=list.innerHTML;
  resultDisplay.innerHTML="";
  window.location.href="search.html"
}
