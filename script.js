// Light / Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function updateToggleIcon() {
    const isDark = root.getAttribute("data-theme") === "dark";
    themeToggle.textContent = isDark ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateToggleIcon();
});

updateToggleIcon();

// Section and card fade-in animation
const animatedItems = document.querySelectorAll(".section, .card");

const animationObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedItems.forEach((item) => {
    animationObserver.observe(item);
});