const menu = document.getElementById("menu-icon");
const cross = document.getElementById("cross");
const navLinks = document.querySelector("nav ul");

menu.addEventListener("click" ,() => {
    navLinks.classList.toggle("active");
})
navLinks.addEventListener("click",() =>{
    navLinks.classList.remove("active");
})


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