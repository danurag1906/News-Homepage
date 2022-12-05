const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".li");

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("active");   
    navmenu.classList.toggle("active");   
})