document.addEventListener("DOMContentLoaded", function(){
    let menu= document.querySelector('.menu-icon');
    let navbar= document.querySelector(".nav-bar");

    menu.onclick=function(){
        navbar.classList.toggle("active");
    };
    window.onscroll= function(){
        navbar.classList.remove("active");
    };

});