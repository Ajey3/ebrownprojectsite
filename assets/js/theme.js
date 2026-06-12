/* ============================
   THEME TOGGLER
   ============================ */
// @ts-nocheck
const root = document.documentElement;
const toggleBtn = document.querySelector("[data-theme-toggle]");

/* Restore saved theme */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.classList.add("light");
}

/* Toggle theme */
toggleBtn.addEventListener("click", () => {
  const isLight = root.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
