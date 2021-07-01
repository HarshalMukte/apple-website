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

// code for vanishing the navbar on taping outside the div 
// document.body.addEventListener("mouseup",(event) => {
//   if (event.target = cross.classList.contains("active")) {
//     active();
//   }
// });


// for up-arrow effect
const btn = document.querySelector('#btn');
btn.addEventListener('click', () =>{
    document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
});

window.onscroll = () =>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
        btn.style.opacity = "1";
      } else {
        btn.style.display = "none";
      }
}