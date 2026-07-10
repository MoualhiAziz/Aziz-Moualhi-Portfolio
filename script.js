// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("is-open"));
});

// Scroll reveal (IntersectionObserver — no external library needed)
const revealEls = document.querySelectorAll(".load-hidden");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

// Tilt effect on project/cert thumbnails (vanilla-tilt.js loaded via CDN)
if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
    max: 4,
    glare: true,
    "max-glare": 0.5,
  });
}
// Typewriter effect for the hero title
const typewriterEl = document.getElementById("typewriter");
if (typewriterEl) {
  const fullText = "Hey, I'm Aziz!";
  let i = 0;
  function typeNext() {
    if (i <= fullText.length) {
      typewriterEl.textContent = fullText.slice(0, i);
      i++;
      setTimeout(typeNext, 80); // typing speed — lower = faster
    }
  }
  typeNext();
}