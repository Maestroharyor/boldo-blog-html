// Query DOM Elements
const mobileMenuButtonOpen = document.querySelector(".mobile_menu_button_open");
const mobileMenuButtonClose = document.querySelector(
  ".mobile_menu_button_close"
);
const mobileMenuButtonNav = document.querySelector(".mobile_menu_nav");

// Attach Event Listeners
mobileMenuButtonOpen.addEventListener("click", () => {
  console.log("clicked");
  mobileMenuButtonNav.classList.remove("translate-x-[-100vw]");
});

mobileMenuButtonClose.addEventListener("click", () => {
  mobileMenuButtonNav.classList.add("translate-x-[-100vw]");
});
