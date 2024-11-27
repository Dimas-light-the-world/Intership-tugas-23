// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})



//nav
let menu = document.querySelector('.menu');
let mobilenav = document.querySelector('.mobile-nav');

menu.addEventListener('click',function(){
    mobilenav.classList.toggle('active');
});