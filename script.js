const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".navLinks");
const links = navLinks.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.classList.remove("fa-bars");
    menuBtn.classList.add("fa-xmark");
  } else {
    menuBtn.classList.remove("fa-xmark");
    menuBtn.classList.add("fa-bars");
  }
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.classList.remove("fa-xmark");
    menuBtn.classList.add("fa-bars");
  });
});