// Select elements
const cards = document.querySelectorAll(".project-card");
const timelineItems = document.querySelectorAll(".timeline-item");
const scrollIndicator = document.getElementById("scroll-indicator");
const projectSection = document.getElementById("projects");

window.addEventListener("scroll", () => {

let scrollTop = window.scrollY;
let windowHeight = window.innerHeight;
let docHeight = document.documentElement.scrollHeight - windowHeight;

// ---------------- PROJECT CARD ANIMATION ----------------
cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;

if(cardTop < windowHeight - 100){
card.classList.add("show");
}

});

// ---------------- TIMELINE ANIMATION ----------------
timelineItems.forEach(item => {

const elementTop = item.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
item.classList.add("show");
}

});

// ---------------- SCROLL INDICATOR ----------------
if(scrollIndicator){

let scrollPercent = (scrollTop / docHeight) * 100;
scrollIndicator.style.height = scrollPercent + "%";

}

// ---------------- PROJECT SECTION COLOR CHANGE ----------------
if(projectSection && scrollIndicator){

const projectTop = projectSection.offsetTop;

if(scrollTop >= projectTop - 300){
scrollIndicator.style.background = "#22c55e";
}else{
scrollIndicator.style.background = "#1DCD9F";
}

}

});


const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 400){
backToTopBtn.classList.add("show");
}else{
backToTopBtn.classList.remove("show");
}

});

backToTopBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const sections = document.querySelectorAll("section");
const navSquares = document.querySelectorAll(".nav-square");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop - sectionHeight / 3){
current = section.getAttribute("id");
}

});

navSquares.forEach(square => {

square.classList.remove("active");

if(square.getAttribute("href") === "#" + current){
square.classList.add("active");
}

});

});