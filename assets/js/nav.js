/* ============================
   NAVIGATION INTERACTIONS
   ============================ */

// @ts-nocheck
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".nav-links a");

let lastScroll = 0;

/* Highlight active section link */
const sections = [...document.querySelectorAll("section[id]")];

function setActiveLink() {
  const scrollPos = window.scrollY + 200;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      links.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

/* Hide nav on scroll down, show on scroll up */
function handleNavVisibility() {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 80) {
    nav.style.transform = "translateY(-100%)";
  } else {
    nav.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
}

/* Smooth scroll for nav links */
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth"
    });
  });
});

/* Event listeners */
window.addEventListener("scroll", () => {
  setActiveLink();
  handleNavVisibility();
});

/* Initial highlight */
setActiveLink();
