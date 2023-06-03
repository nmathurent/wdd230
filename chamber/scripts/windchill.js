// Author: Nelson Mathurent
// Date: May 23, 2023

// Variable used to hold the current year
const t = 50;               //   temperature in Fahrenheit
const s = 3.1;                //   wind speed in miles per hour.
let  windchill = 0;
let  wccelsius = 0;
let  sexp = 0;
let kmperhour = s * 1.609344;            // converting mph to kph
const tcelsius = (t - 32) * 0.5556;      // converting fahrenheit to celsius

// Placing the value of the current year variable into the HTML file
var elementTCelsius = document.querySelector('#temperature');
if (elementTCelsius) {
  elementTCelsius.textContent = `${tcelsius.toFixed(0)}`;
}

if (t <= 50 && s > 3.0) {
  sexp = s ** 0.16
  windchill = 34.75 + ( 0.6215 * t) - (35.75 * sexp) + (0.4275 * t * sexp);
  wccelsius = (windchill - 32) * 0.5556;
  windchill = wccelsius.toFixed(1);
} 
else {
     windchill = "N/A";
}

var element = document.querySelector('#windchill');
if (element) {
  element.textContent = `${windchill}`;
}

var elementKmperhour = document.querySelector('#kmperhour');
if (elementKmperhour) {
  elementKmperhour.textContent = `${kmperhour.toFixed(1)}`;
}


