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

document.getElementById("secondContainer").style.border = "none";

buttonElement.addEventListener('click', () => {
  const myItem = inputElement.value;
  inputElement.value = '';
  inputElement.placeholder= '';

  if (myItem != '') {
    document.getElementById("secondContainer").style.border = "1px solid gray";
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listDelBtn = document.createElement('button');
    const araiLabelValue = "Remove " + myItem;
    // Accessibility - Creating an aria-label attribute
    listDelBtn.ariaLabel = araiLabelValue
    console.log(listDelBtn.ariaLabel);

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listDelBtn);
    listDelBtn.textContent = '❌';
    listElement.appendChild(listItem);

    listDelBtn.addEventListener('click', () => {
      listElement.removeChild(listItem);
      countItemsToRemoveBorder('list')
    });
  }

  inputElement.focus();

});

function countItemsToRemoveBorder(listID){
  var ul = document.getElementById(listID);
  var i=0, itemCount =0;
  while(ul.getElementsByTagName('li') [i++]) itemCount++;
  if (itemCount == 0) {
    document.getElementById("secondContainer").style.border = "none";
  }
  }