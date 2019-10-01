const banner = document.querySelector(".intro img");
const body = document.querySelector("body");
const header = document.querySelector("header");
const navLogo = document.querySelector('.logo-heading');
const buttonOne = document.querySelector(".destination .btn");
const pictures = document.querySelectorAll(".img-content img");
const pictureHeadings = document.querySelectorAll(".text-content h2");
const signUpButtons = document.querySelectorAll(".btn");

banner.addEventListener("mouseenter", function bannerSmall(e){
    banner.style = "width:90%; margin: 0 5%;";
    banner.removeEventListener("mouseenter", bannerSmall, false);
}, false);

window.addEventListener("resize", function windowResize(e){
    body.style.backgroundColor = `rgb(${(window.innerWidth/1366)*255}, ${(window.innerHeight/768)*255}, 120)`;
}, false);