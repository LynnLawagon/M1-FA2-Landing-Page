const themeButton = document.getElementById("themeSwitch");
const menuButton = document.getElementById("menuToggle");
const navigation = document.querySelector(".main-nav");

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  themeButton.querySelector(".theme-label").textContent = isDark ? "Light mode" : "Dark mode";
  themeButton.querySelector(".theme-icon").textContent = isDark ? "☀" : "◐";
  themeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
});

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
