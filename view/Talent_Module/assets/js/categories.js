const dropdown=document.querySelector(".dropdown"),
    Categories=document.querySelector(".Categories"),
    options=document.querySelectorAll("li"),
    arrow=document.querySelector(".arrow-icon"),
    change=document.querySelector(".change"),
    searchInput=document.querySelector(".search-input"),
    search_icon=document.querySelector(".search-icon")


Categories.addEventListener("click", ()=>{
    dropdown.classList.toggle("active")
    arrow.classList.toggle("active")
})

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector("a").innerText;
        change.innerText = selectedOption;
        dropdown.classList.remove("active");
        arrow.classList.remove("active")
    });
});