// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=cbb8d5e1cf97e51db015d685ee3d3340&units=imperial';

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
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