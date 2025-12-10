function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form message
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("contactMessage").innerText =
    "Thank you! Your message has been sent.";
});

// DARK MODE
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("toggle-icon");

  body.classList.toggle("dark-mode");

  const mode = body.classList.contains("dark-mode") ? "dark" : "light";

  localStorage.setItem("theme", mode);

  icon.innerText = mode === "dark" ? "☀️" : "🌙";
}

// Load saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.getElementById("toggle-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.innerText = "☀️";
  }
};

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
