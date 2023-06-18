// Author: Nelson Mathurent
// Date: Apr 20, 2023

/*  Directory Page */
// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getCompanyData() {
    const response = await fetch('json/chamberDirectory.json');
    const data = await response.json();
    console.log(JSON.stringify(data));
    console.table(data.companies);  // note that we reference the company array of the data object given the structure of the json file
    displayCompanies(data.companies);

}

const displayCompanies = (companies) => {
  const cards = document.querySelector('article.grid'); // select the output container element
  let companyNumber = 0;
  let companyPosition = "";

  companies.forEach((company) => {
    // Create elements to add to the div.cards element
    companyNumber += 1;
    switch (companyNumber){
      case 1:
              companyPosition = "st";
              break;
      case 2:
              companyPosition = "nd";
              break;
      case 3:
              companyPosition = "rd";
              break;
      default:
          companyPosition = "th";
          break;
   }
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

     // Build the image portrait by setting all the relevant attribute
     portrait.setAttribute('src', company.logourl);
     portrait.setAttribute('alt', `Logo of ${company.name} - ${companyNumber}${companyPosition} company`);
     portrait.setAttribute('loading', 'lazy');
     portrait.setAttribute('width', '100');
     portrait.setAttribute('height', '40');

    // Build the h2 content out to show the company name - finish the template string
    h2.textContent = `${company.name}`;
    p1.textContent = `${company.address}`;
    p2.textContent = `${company.phone}`;
    p3.textContent = `${company.url}`;

   

    // Append the section(card) with the created elements
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    

    cards.appendChild(card);
  }) // end of forEach loop
} // end of function expression

getCompanyData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function


function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}