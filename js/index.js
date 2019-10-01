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
header.addEventListener('mouseleave', e=>{
    e.target.style.border = "2px solid black";
},false);
window.addEventListener("scroll",function replaceLogo(e){
    let logoImg = document.createElement("img");
    logoImg.src = "https://www.netclipart.com/pp/m/11-110688_school-bus-clipart-transparent-background.png";
    logoImg.style.height = "100%";
    navLogo.parentNode.replaceChild(logoImg, navLogo);
    window.removeEventListener("scroll", replaceLogo, false);
},false);
buttonOne.addEventListener("click", function btnOneOnFocus(e){
    window.open("https://www.google.com", '_blank').focus();
}, false);