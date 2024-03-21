function switchLanguage(lang) {
  const englishElements = document.querySelectorAll('[id$="-en"]');
  const spanishElements = document.querySelectorAll('[id$="-es"]');

  if (lang === "es") {
    englishElements.forEach((el) => el.classList.add("hidden"));
    spanishElements.forEach((el) => el.classList.remove("hidden"));
  } else {
    englishElements.forEach((el) => el.classList.remove("hidden"));
    spanishElements.forEach((el) => el.classList.add("hidden"));
  }

  document.documentElement.lang = lang;
  localStorage.setItem("language", lang === "en" ? "en" : "es");
}

document
  .getElementById("english-lang")
  .addEventListener("click", () => switchLanguage("en"));
document
  .getElementById("spanish-lang")
  .addEventListener("click", () => switchLanguage("es"));

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language");
  if (savedLang) {
    switchLanguage(savedLang);
  }
});
