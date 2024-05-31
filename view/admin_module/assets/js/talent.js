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
  const searchForm= document.querySelector('#search_form');
  
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
    let selectedOption= list.innerHTML;
    searchInput.value=selectedOption;
    resultDisplay.innerHTML="";
    searchForm.submit();
    searchInput.value= selectedOption;
  }