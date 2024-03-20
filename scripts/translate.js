// Translation data
const translations = {
  en: {
    intro: "Hello World, I'm Marco",
    bio: "I design and build apps",
    // ... other translations ...
  },
  es: {
    intro: "Hola Mundo, soy Marco",
    bio: "Diseño y desarrollo aplicaciones",
    // ... other translations ...
  },
};

// Function to change language
function changeLanguage(lang) {
  for (let key in translations[lang]) {
    document.getElementById(key).textContent = translations[lang][key];
  }

  // Update the language attribute in the html tag
  document.documentElement.lang = lang;
}

// Event listeners for language switch
document
  .getElementById("english-lang")
  .addEventListener("click", () => changeLanguage("en"));
document
  .getElementById("spanish-lang")
  .addEventListener("click", () => changeLanguage("es"));
