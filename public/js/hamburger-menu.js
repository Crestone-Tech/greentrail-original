/* DEPENDENCIES */
const menu = document.querySelector("#hamburger-menu");
const navLinks = document.querySelector("#nav-links");

/* FUNCTIONS */
menu.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});
