// Author: Nelson Mathurent
// Date: May 15, 2023

// Variable used to hold the current year
let currentYear = new Date().getFullYear();

// Placing the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Determining date and time of when the current document was last modified
let oLastModif = new Date(document.lastModified);
document.querySelector('#lastupdated').textContent = `Last Updated: ${oLastModif.toLocaleString().replace(',', '')}`;

// Creating three variables that hold references to the input, button, and list elements
const listElement = document.querySelector('ul');
const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');