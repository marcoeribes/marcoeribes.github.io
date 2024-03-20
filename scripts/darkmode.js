function toggleDarkMode() {
  const html = document.documentElement;
  const isDarkMode = html.classList.toggle("dark");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

  const image = document.getElementById("toggleDarkMode");
  if (isDarkMode) {
    image.src = "assets/moon.svg"; // Path to moon image
    image.alt = "Moon Image";
  } else {
    image.src = "assets/sun.svg"; // Path to sun image
    image.alt = "Sun Image";
  }
}

window.onload = () => {
  const isDarkModeEnabled = localStorage.getItem("darkMode") === "enabled";
  if (isDarkModeEnabled) {
    document.documentElement.classList.add("dark");
  }

  const image = document.getElementById("toggleDarkMode");
  image.src = isDarkModeEnabled ? "assets/moon.svg" : "assets/sun.svg"; // Set initial image based on dark mode
  image.alt = isDarkModeEnabled ? "Moon Image" : "Sun Image";

  image.addEventListener("click", toggleDarkMode);
};
