const edit=document.getElementsByClassName("editButton");
const facebook=document.getElementById("facebook")
const facebook_link=facebook.getAttribute("href")

const twitter=document.getElementById("twitter")
const twitter_link=twitter.getAttribute("href")

const linkdin=document.getElementById("linkdin")
const linkdin_link=linkdin.getAttribute("href")

const url1=document.getElementById("newURL-1")
const url2=document.getElementById("newURL-2")
const url3=document.getElementById("newURL-3")

const cancelbutto = document.getElementById("cancelm");
const savebutto = document.getElementById("savem");

const f=document.getElementById("f")
const t=document.getElementById("t")
const l=document.getElementById("l")

const mediaModal=document.getElementById("mediaModal")
function editMedia(){
    url1.value=facebook_link
    url2.value=twitter_link
    url3.value=linkdin_link
    
    mediaModal.style.display="block";
}

window.addEventListener("click", (event) => {
    if (event.target === mediaModal) {
      mediaModal.style.display = "none";
    }
});

cancelbutto.addEventListener("click", () => {
mediaModal.style.display = "none";
});
savebutto.addEventListener("click", () => {
    // Update social media links conditionally
    if (url1.value) {
      facebook.setAttribute("href", url1.value);
    } else {
      facebook.removeAttribute("href"); // Remove attribute if no URL
      f.style.display="none";
    }
  
    if (url2.value) {
      twitter.setAttribute("href", url2.value);
    } else {
        twitter.removeAttribute("href");
      t.style.display="none";
    }
  
    if (url3.value) {
      linkdin.setAttribute("href", url3.value);
    } else {
      linkdin.removeAttribute("href");
      l.style.display="none";
    }
  
    // Close the modal
    mediaModal.style.display = "none";
  });
