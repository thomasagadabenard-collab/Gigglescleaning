const navList = document.querySelector(".nav-lists");
const hamburger = document.querySelector(".hamburger");
const servicesDropdown = document.querySelector(".services-dropdown");
const dropDown = document.querySelector(".dropdown-menu");


hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); 
  navList.classList.toggle("active");
});

servicesDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation(); 
  dropDown.classList.toggle("active");
  servicesDropdown.classList.toggle("active");
});

const closeMenus = () => {
  navList.classList.remove("active");
  dropDown.classList.remove("active");
  servicesDropdown.classList.remove("active");
};

window.addEventListener("click", closeMenus);
window.addEventListener("touchstart", closeMenus); 



const masterTl = gsap.timeline();

masterTl.from(".logo", {
  duration: 1,
  opacity:0,
  ease: "power1.out"
});


masterTl.fromTo(".nav-lists li",
  {opacity: 0, y: -20 },   
  {opacity:1, y: 0, duration: 1, ease: "power1.out", stagger: 0.2 } 
);


masterTl.from(".hamburger", {
  duration: 1,
  opacity: 0,
  ease: "power1.out"
}, "-=0.8"); 


masterTl.from(".hero-text span, .hero-text h1", {
  duration: 1.5,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.1
}, "-=0.5"); 

// Animate hero buttons
masterTl.from(".hero-buttons", {
  duration: 1.5,
  opacity: 0,
  ease: "bounce.out",
  stagger: 0.3
}, "-=1"); 

masterTl.from(".hero-images", {
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.2
}, "-=1"); 

