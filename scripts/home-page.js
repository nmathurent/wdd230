// Author: Nelson Mathurent
// Date: Apr 20, 2023

// Variable used to hold the current year
let currentYear = new Date().getFullYear();

// Placing the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;