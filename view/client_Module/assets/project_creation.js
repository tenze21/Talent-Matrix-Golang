const form= document.querySelector('#project_creation_form');
const success= document.querySelector('.success');
const logo= document.querySelector('.logo');
const main= document.querySelector('main')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    showSuccess();
})

function showSuccess(){
    main.style.display="none";
    success.style.display="flex";
}


// Skill selection functionality (library)
new MultiSelectTag('skills', {
    rounded: true,    // default true
    shadow: false,      // default false
    placeholder: 'Search',  // default Search...
    tagColor: {
        textColor: '#0d79dd',
        borderColor: '#0d79dd',
        bgColor: '#fff',
    },
    onChange: function(values) {
        console.log(values)
    }
})