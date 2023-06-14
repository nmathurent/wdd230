// Author: Nelson Mathurent
// Date: Jun 12, 2023

// Variable used to hold the url that contains the URL string of the JSON resource provided
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log("----");
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
}
  
const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
    let prophetNumber = 0;
    let prophetPosition = "";
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      prophetNumber += 1;
      switch (prophetNumber){
        case 1:
                prophetPosition = "st";
                break;
        case 2:
                prophetPosition = "nd";
                break;
        case 3:
                prophetPosition = "rd";
                break;
        default:
            prophetPosition = "th";
            break;
     }
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      p1.textContent = `Date of Birth: ${prophet.birthdate}`;
      p2.textContent = `Place of Birth: ${prophet.birthplace}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophetNumber}${prophetPosition} Latter-day President`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression

  getProphetData();