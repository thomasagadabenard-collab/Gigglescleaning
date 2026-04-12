const navList = document.querySelector(".nav-lists");
const hamburger = document.querySelector(".hamburger");
const servicesDropdown = document.querySelector(".services-dropdown");
const dropDown = document.querySelector(".dropdown-menu");

let overlay;

const createOverlay = () => {
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    overlay.addEventListener("click", closeMenus);
    overlay.addEventListener("touchstart", closeMenus);
  }
};

const removeOverlay = () => {
  if (overlay) {
    overlay.remove();
    overlay = null;
  }
};

const closeMenus = () => {
  navList.classList.remove("active");
  dropDown.classList.remove("active");
  servicesDropdown.classList.remove("active");
  removeOverlay();
};

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navList.classList.toggle("active");
});

servicesDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  createOverlay();
  dropDown.classList.toggle("active");
  servicesDropdown.classList.toggle("active");
});