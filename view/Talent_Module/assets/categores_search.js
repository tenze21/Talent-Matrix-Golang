const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".c_options");

let countries = [
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
    "Music & Audio",
    "Blockchain",
    "Graphic Design",
    "Web Design"
];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));