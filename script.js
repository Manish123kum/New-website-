const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


/* Navbar shadow while scrolling */

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 30) {
    navbar.style.boxShadow = "0 8px 30px rgba(7,31,63,.08)";
  } else {
    navbar.style.boxShadow = "none";
  }

});


/* Simple reveal animation */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(
  ".card, .notice, .gallery-item, .activity, .hero-card"
).forEach(element => {

  element.classList.add("reveal");

  observer.observe(element);

});
