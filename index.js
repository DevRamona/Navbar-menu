
const bars = document.querySelector(".fa-bars");
const MenuIcon = document.querySelector(".menu");

bars.addEventListener("click", () => {
  MenuIcon.classList.toggle("show-menu");
});
