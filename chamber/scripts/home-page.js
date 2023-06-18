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


// Display Time in minutes between visits

// milliseconds to minutes  -  minutes = milliseconds ÷ 60,000
const msToMinutes = 60000;

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;

const visitsTimeDisp = document.querySelector(".visitDays");

// get the stored value in LocalStorage
let lastVisitDate = Number(window.localStorage.getItem("lastvisited-date")) || 0;

// determine if this is the first visit or calculate the minutes between visits
if (lastVisitDate !== 0) {
  // var day = currentDate.setMinutes( currentDate.getMinutes() - 20 );
  // var newDate = new Date();
  // newDate.setDate(day);
  // lastVisitDate = newDate.getTime();
  
  let numMinutes = (Date.now() - lastVisitDate) / msToMinutes;
  var textTimeDisplay;

  if (numMinutes < 1440) {
    if (numMinutes > 60) {
      numMinutes = numMinutes / 60;
      textTimeDisplay = ` ${numMinutes.toFixed(0)} hours`
    }
    else {
      textTimeDisplay = ` ${numMinutes.toFixed(0)} minutes`
    }
  }
  else {
    let numDays = (Date.now() - lastVisitDate) / msToDays;
    textTimeDisplay = ` ${numDays.toFixed(0)} days`
  }

  console.log(Date.now()); 
  console.log(lastVisitDate);
  console.log(lastVisitDate - Date.now());
  console.log(msToMinutes);
  visitsTimeDisp.textContent = textTimeDisplay;
} else {
  visitsTimeDisp.textContent = ` first time!`;
}

// store the last visited date
lastVisitDate = Date.now();
localStorage.setItem("lastvisited-date", lastVisitDate);

/* Calculating Current Date and Time  */

function SetDateNTime() {
  document.getElementById("dateNtime").value = new Date();
}

// var d = new Date();

// // Set the value of the "time" field
// var hours = d.getHours();
// var mins = d.getMinutes();
// var seconds = d.getSeconds();
// var vdate = d.toDateString();
//document.getElementById("dateNtime").value = `${vdate} ${hours}:S{mins}:${seconds}`;
// document.getElementById("dateNtime").value = d.toDateString() + " " + hours + ":" + mins + ":" + seconds;


/* Display Membership Benefits  */

//document.getElementById("membershipBenefits").textContent = "";

function getSelectedRadio() {
  let radio1 = document.getElementById('radio1');
  let radio2 = document.getElementById('radio2');
  let radio3 = document.getElementById('radio3');
  let radio4 = document.getElementById('radio4');
  console.log("TEST NElson" + radio1.value + " " + radio1.checked);
 if (radio1.checked) {
   console.log("Entre radio 1");
   document.getElementById("membershipBenefits").textContent = "NP Membership is for non profit organizations and there is no fee.";
 }
 if (radio2.checked) {
   console.log("Entre radio 2");
   document.getElementById("membershipBenefits").textContent = "Bronze Membership has a fee of $150.00, include trainings.";
 }
 if (radio3.checked) {
   console.log("Entre radio 3");
   document.getElementById("membershipBenefits").textContent = "Silver Membership has a fee of $250.00, include trainings and advertising.";
 }
 if (radio4.checked) {
   console.log("Entre radio 4");
   document.getElementById("membershipBenefits").textContent = "Gold Membership has a fee of $350.00, include trainings, advertising and event discounts.";
 }
}


