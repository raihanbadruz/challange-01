const menuToggle = document.querySelector(".toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// function noScroll() {
//   window.scrollTo(0, 0);
// }
// window.addEventListener("scroll", noScroll);
