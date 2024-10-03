// Select all nav links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Loop through the nav links
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all links
    navLinks.forEach(nav => nav.classList.remove('active'));
    
    // Add active class to the clicked link
    this.classList.add('active');
  });
});

// Function to set the selected language
// function setLanguage(language) {
//     const dropdownButton = document.getElementById('dropdownMenuButton');
//     dropdownButton.innerHTML = `<i class="fas fa-globe"></i> ${language}`;
//   }
const translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    price: 'Price'
  },
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدمات',
    portfolio: 'معرض الأعمال',
    price: 'الأسعار'
  }
};

// function setLanguage(lang) {
//   // Set the text content for each translatable element
//   console.log(lang);
//   document.getElementById('home-link').textContent = translations[lang].home;
//   document.getElementById('about-link').textContent = translations[lang].about;
//   document.getElementById('services-link').textContent = translations[lang].services;
//   document.getElementById('protfolio-link').textContent = translations[lang].portfolio;
//   document.getElementById('price-link').textContent = translations[lang].price;

//   console.log(document.getElementById('home-link').textContent);
//   // Change the language in the <html> or <body> tag
//   document.body.setAttribute('lang', lang);
  
//   // Update the dropdown button text
//   const dropdownButton = document.getElementById('dropdownMenuButton');
//   dropdownButton.innerHTML = `<i class="fas fa-globe"></i> ${lang === 'en' ? 'English' : 'العربية'}`;
// }

function setLanguage(lang) {
    if (lang === 'ar') {
      // Redirect to the Arabic version of the page
      window.location.href = 'index_ar.html';  // Change 'arabic.html' to the actual Arabic page URL
      return;  // Exit the function to avoid further execution
    }
    if (lang === 'en') {
        // Redirect to the Arabic version of the page
        window.location.href = 'index.html';  // Change 'arabic.html' to the actual Arabic page URL
        return;  // Exit the function to avoid further execution
      }

}