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
pictures.forEach(picture => {picture.addEventListener("load", function onLoad(e) {
    e.target.src = "https://blog.hubspot.com/hubfs/image8-2.jpg";
    picture.removeEventListener("load", onLoad, false);
},false)});
pictureHeadings.forEach(heading => {
    heading.addEventListener("copy", function onCopy(e) {
        e.target.textContent = "You've made a mistake.";
        heading.removeEventListener("copy", onCopy, false);
    },false);
    heading.addEventListener("dblclick", function double(e) {
        e.target.textContent = "Suprise!!";
        heading.removeEventListener("dblclick", double, false);
    },false);
});
window.addEventListener("keydown", function changeButtonColors(e){
    signUpButtons.forEach(button=>{button.style.backgroundColor = `rgb(${(window.innerHeight/100)*55}, ${(window.innerWidth/200)*30}, 90)`});
}, false);
buttonOne.draggable = "true";
buttonOne.addEventListener("dragstart", function warn(e){ 
    e.preventDefault();
    alert("Don't Touch"); 
    buttonOne.removeEventListener("dragstart", warn, false);
    buttonOne.addEventListener("dragstart", function destroy(e){
        e.preventDefault();
        document.body = document.createElement("body");
        alert("You were warned.");
    }, false);
}, false);

//Stop Page Reset
navLinks = document.querySelectorAll(".nav-link").forEach(link=>{
    link.addEventListener("click", function(e){
        e.preventDefault();
        alert("No Links for you");
    }, false);
});

//Prevent Propogation
document.querySelector(".main-navigation").addEventListener("click",e=>{
    e.target.style.backgroundColor = "#222";
},false);
document.querySelector(".nav-container").addEventListener("click",e=>{
    // e.stopPropagation();
    e.target.style.backgroundColor = "#555";
},false);