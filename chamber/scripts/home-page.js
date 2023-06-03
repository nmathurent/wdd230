// Author: Nelson Mathurent
// Date: Apr 20, 2023

// Variable used to hold the current year
let currentYear = new Date().getFullYear();

// Variable used to hold the current year
let otodayDate = new Date();

// Placing the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Determining date and time of when the current document was last modified
let oLastModif = new Date(document.lastModified);
document.querySelector('#lastupdated').textContent = `Last Updated: ${oLastModif.toLocaleString().replace(',', '')}`;
document.querySelector('#lastupdated2').textContent = `Last Updated: ${oLastModif.toLocaleString().replace(',', '')}`;

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  
  const currentDate = new Date();
  const monthName = months[currentDate.getMonth()];
  const today = currentDate.getDay();
  const dayText = days[today];
  const dayNum = currentDate.getDate();
  const fullYear = currentDate.getFullYear();
  document.querySelector('#todaydate').textContent = `${dayText}, ${dayNum} ${monthName} ${fullYear}`;

  // Begin Top Banner 
  document.querySelector('#monday-tuesday').textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

  const buttonElement = document.getElementById("bannerbtn");
  const bannerTop = document.getElementById('meet-banner');

  buttonElement.addEventListener('click', () => {
    bannerTop.style.display = "none";
  });

  console.log(today);
  if (today === 1 || today === 2) {
    
     bannerTop.style.display = "block";
  }

    // End Top Banner 

function toggleMenu() {
    //console.log("It worked!")
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburguerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburguerBtn')
x.onclick = toggleMenu;


// Display Time in days between visits

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;

const visitsTimeDisp = document.querySelector(".visitDays");

// get the stored value in LocalStorage
let lastVisitDate = Number(window.localStorage.getItem("lastvisited-date")) || 0;

// determine if this is the first visit or calculate the days between visits
if (lastVisitDate !== 0) {
  // var day = currentDate.getDate()  - 10;
  // var newDate = new Date();
  // newDate.setDate(day);
  // lastVisitDate = newDate.getTime();
  let numDays = (Date.now() - lastVisitDate) / msToDays;
  console.log(Date.now()); 
  console.log(lastVisitDate);
  console.log(lastVisitDate - Date.now());
  console.log(msToDays);
  visitsTimeDisp.textContent = ` ${numDays.toFixed(0)} days`;
} else {
  visitsTimeDisp.textContent = ` first time!`;
}

// store the last visited date
lastVisitDate = Date.now();
localStorage.setItem("lastvisited-date", lastVisitDate);


