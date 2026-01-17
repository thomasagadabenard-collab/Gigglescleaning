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




