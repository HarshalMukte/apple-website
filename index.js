// loader js
const loader = document.getElementById("loader");
const container = document.querySelector(".container");

function loading(){
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;

  setTimeout(() => {
    loader.style.opacity = "0";
    container.classList.remove("hide");
   loader.style.display = "none";
  },2000);
}


// menu toggle
const menu = document.getElementById("menu-icon");
const cross = document.getElementById("cross-icon");
const navLinks = document.querySelector("nav ul");

menu.addEventListener("click" ,() => {
   active();
});
cross.addEventListener("click",() => {
  active();
})
navLinks.addEventListener("click",() =>{
   active();
});
function active(){
  navLinks.classList.toggle("active");
    cross.classList.toggle("active");
    menu.classList.toggle("deActive");
}




// for up-arrow effect
const btn = document.querySelector('#btn');
btn.addEventListener('click', () =>{
    document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
});

window.onscroll = () =>{
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
        btn.style.opacity = "1";
      } else {
        btn.style.display = "none";
      }
}


