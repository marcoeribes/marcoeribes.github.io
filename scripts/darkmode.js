function toggleDarkMode() {
  const html = document.documentElement;
  const isDarkMode = html.classList.toggle("dark");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

  const modeImage = document.getElementById("toggleDarkMode");
  const emailImage = document.getElementById("emailIcon"); // Get the email icon element

  if (isDarkMode) {
    modeImage.src = "assets/darkmode/moon.svg";
    modeImage.alt = "Moon Image";

    emailImage.src = "assets/email_dark.svg"; // Update email icon for dark mode
  } else {
    modeImage.src = "assets/darkmode/sun.svg";
    modeImage.alt = "Sun Image";

    emailImage.src = "assets/email.svg"; // Update email icon for light mode
  }
}

window.onload = () => {
  const isDarkModeEnabled = localStorage.getItem("darkMode") === "enabled";
  if (isDarkModeEnabled) {
    document.documentElement.classList.add("dark");
  }

  const modeImage = document.getElementById("toggleDarkMode");
  const emailImage = document.getElementById("emailIcon");

  modeImage.src = isDarkModeEnabled
    ? "assets/darkmode/moon.svg"
    : "assets/darkmode/sun.svg";
  modeImage.alt = isDarkModeEnabled ? "Dark Mode" : "Light Mode";

  emailImage.src = isDarkModeEnabled
    ? "assets/email_dark.svg"
    : "assets/email.svg"; // Set initial email icon

  modeImage.addEventListener("click", toggleDarkMode);
};
