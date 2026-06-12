/* ============================
   SCROLL REVEAL ANIMATIONS
   ============================ */
// @ts-nocheck
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // reveal once
      }
    });
  },
  {
    threshold: 0.15, // reveal when 15% visible
    rootMargin: "0px 0px -10% 0px"
  }
);

/* Attach observer to all animatable elements */
document.querySelectorAll("[data-anim]").forEach(el => {
  observer.observe(el);
});
