// Author: Nelson Mathurent
// Date: May 23, 2023

const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Irvine,CA,us&appid=cbb8d5e1cf97e51db015d685ee3d3340&units=imperial';

function displayResults(weatherData) {
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  // Variable used to hold the current year
    const t = weatherData.main.temp.toFixed(0);               //   temperature in Fahrenheit
    const s = weatherData.wind.speed;                         //   wind speed in miles per hour.
    let  windchill = 0;
    let  wccelsius = 0;
    let  sexp = 0;
    let kmperhour = s * 1.609344;            // converting mph to kph

    // Placing the value of the temperature variable into the HTML file
    var elementT = document.querySelector('#temperature');
    if (elementT) {
      elementT.textContent = `${t}`;
    }

    if (t <= 50 && s > 3.0) {
      sexp = s ** 0.16
      windchill = 34.75 + ( 0.6215 * t) - (35.75 * sexp) + (0.4275 * t * sexp);
      windchill = windchill.toFixed(1);
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
    var elementCurrentCond = document.querySelector('#currentcondition');
    if (elementCurrentCond) {
      elementCurrentCond.textContent = `${desc}`;
    }
}

async function apiFetch() {
        
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
          } else {
              throw Error(await response.text());
          }
        } catch (error) {
            console.log(error);
        }
      }
      
apiFetch();

// Variable used to hold the current year
// const t = 50;               //   temperature in Fahrenheit
// const s = 3.1;                //   wind speed in miles per hour.
// let  windchill = 0;
// let  wccelsius = 0;
// let  sexp = 0;
// let kmperhour = s * 1.609344;            // converting mph to kph

// // Placing the value of the temperature variable into the HTML file
// var elementT = document.querySelector('#temperature');
// if (elementT) {
//   elementT.textContent = `${t.toFixed(0)}`;
// }

// if (t <= 50 && s > 3.0) {
//   sexp = s ** 0.16
//   windchill = 34.75 + ( 0.6215 * t) - (35.75 * sexp) + (0.4275 * t * sexp);
//   windchill = windchill.toFixed(1);
// } 
// else {
//      windchill = "N/A";
// }

// var element = document.querySelector('#windchill');
// if (element) {
//   element.textContent = `${windchill}`;
// }

// var elementKmperhour = document.querySelector('#kmperhour');
// if (elementKmperhour) {
//   elementKmperhour.textContent = `${kmperhour.toFixed(1)}`;
// }


