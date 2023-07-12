// Author: Nelson Mathurent
// Date: May 23, 2023

const weatherIcon = document.querySelector('#weather-icon');
const daylist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,CA,us&appid=cbb8d5e1cf97e51db015d685ee3d3340&units=imperial';

function displayResults(weatherData) {
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  const desc = weatherData.list[0].weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  // Variable used to hold the current year
    const t = weatherData.list[0].main.temp.toFixed(0);               //   temperature in Fahrenheit
    const h = weatherData.list[0].main.humidity;                      //   humidity

    // Placing the value of the temperature variable into the HTML file
    var elementT = document.querySelector('#temperature');
    if (elementT) {
      elementT.textContent = `${t}`;
    }

    var element = document.querySelector('#humidity');
    if (element) {
      element.textContent = `${h}`;
    }

    var elementCurrentCond = document.querySelector('#currentcondition');
    if (elementCurrentCond) {
      elementCurrentCond.textContent = `${desc}`;
    }

    const nd = new Date();
    const day1 = new Date();
    const day2 = new Date();
    const day3 = new Date();
    // let day1 = new Date();
    // let day2 = new Date();
    // let day3 = new Date();
    day1.setDate(day1.getDate() + 1);
    day2.setDate(day2.getDate() + 2);
    day3.setDate(day3.getDate() + 3);

    for (let i = 0; i < weatherData.list.length; i++) {
      console.log(weatherData.list[i].dt);
      console.log(nd.toLocaleDateString('en-CA'));
      console.log(day1.toLocaleDateString('en-CA') + " 00:00:00");
      console.log(day2.toLocaleDateString('en-CA') + " 00:00:00");
      console.log(day3.toLocaleDateString('en-CA') + " 00:00:00");
      console.log(weatherData.list[i].dt_txt);
      console.log(weatherData.list[i].dt_txt.substr(0,10));
      if (weatherData.list[i].dt_txt == day1.toLocaleDateString('en-CA') + " 00:00:00") {
        var elementT = document.querySelector('#temperature1');
        var elementD = document.querySelector('#day1');
        if (elementT) {
          elementT.textContent = weatherData.list[i].main.temp;
          elementD.textContent = daylist[day1.getDay()];
        }
      }
      if (weatherData.list[i].dt_txt == day2.toLocaleDateString('en-CA') + " 00:00:00") {
        var elementT = document.querySelector('#temperature2');
        var elementD = document.querySelector('#day2');
        if (elementT) {
          elementT.textContent = weatherData.list[i].main.temp;
          elementD.textContent = daylist[day2.getDay()];
        }
      }
      if (weatherData.list[i].dt_txt == day3.toLocaleDateString('en-CA') + " 00:00:00") {
        var elementT = document.querySelector('#temperature3');
        var elementD = document.querySelector('#day3');
        if (elementT) {
          elementT.textContent = weatherData.list[i].main.temp;
          elementD.textContent = daylist[day3.getDay()];
        }
      }
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



