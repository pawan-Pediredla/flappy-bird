// i18n.js

const translations = {
    en: require('./translations/en.json'),
    es: require('./translations/es.json'),
    fr: require('./translations/fr.json'),
  };
  
  let currentLang = 'en'; // Default language
  
  const setLanguage = (lang) => {
    if (translations[lang]) {
      currentLang = lang;
      updateTextContent();
    }
  };
  
  const updateTextContent = () => {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      element.textContent = translations[currentLang][key] || key;
    });
  };
  
  // Load initial translations
  document.addEventListener('DOMContentLoaded', updateTextContent);
  
  export { setLanguage };
  