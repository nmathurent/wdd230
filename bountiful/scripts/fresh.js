// Author: Nelson Mathurent
// Date: Jul 12, 2023

// Variable used to hold the url that contains the URL string of the JSON resource provided
const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
let carbohydrates = [];

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log("----");
    console.table(data);  // note that we reference the prophet array of the data object given the structure of the json file
    displayFruits(data);
}
  
const displayFruits = (fruits) => {
    const options1 = document.querySelector('select.fruits1'); // select the output container element
    const options2 = document.querySelector('select.fruits2'); // select the output container element
    const options3 = document.querySelector('select.fruits3'); // select the output container element
  
    let idx = 0;

    fruits.forEach((fruit) => {
      // Create elements to add to the select.fruits element
   
      carbohydrates[idx] = fruit.nutritions.carbohydrates;
      idx = idx + 1;

      let fOption1 = document.createElement('option');
      let fOption2 = document.createElement('option');
      let fOption3 = document.createElement('option');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      fOption1.textContent = `${fruit.name}`;
      fOption2.textContent = `${fruit.name}`;
      fOption3.textContent = `${fruit.name}`;
  
      // Build the option by setting all the relevant attribute
      fOption1.setAttribute('value', fruit.name);
      fOption2.setAttribute('value', fruit.name);
      fOption3.setAttribute('value', fruit.name);
  
      // Append the option to the select element
      options1.appendChild(fOption1);
      options2.appendChild(fOption2);
      options3.appendChild(fOption3);
    }) // end of forEach loop
  } // end of function expression

  getFruitData();


  let freshForm = document.getElementById("freshForm");

  freshForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("---Inside DisplayOutputArea Last -");
    const cards = document.querySelector('div.orderArea'); // select the output container element

    

    let firstname = document.getElementById("fname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let fruit1 = document.getElementById("fruit1");
    let fruit2 = document.getElementById("fruit2");
    let fruit3 = document.getElementById("fruit3");
    let orderDate = document.getElementById("orderDate");
    let specinst = document.getElementById("specinst");
    let carbohydrates = document.getElementById("carbohydrates");
    console.log(orderDate);


      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let p5 = document.createElement('p');
      let p6 = document.createElement('p');
      let p7 = document.createElement('p');
      let p8 = document.createElement('p');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `Name: ${firstname.value}`;
      p1.textContent = `Email: ${email.value}`;
      p2.textContent = `Phone number: ${phone.value}`;
      p3.textContent = `Selected fruit 1: ${fruit1.value}`;
      p4.textContent = `Selected fruit 2: ${fruit2.value}`;
      p5.textContent = `Selected fruit 3: ${fruit3.value}`;
      p6.textContent = `Special Instructions: ${specinst.value}`;
      p7.textContent = `Order date: ${orderDate.value}`;
      p8.textContent = `Total carbohydrates: ${carbohydrates.value}`;
  

      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(p5);
      card.appendChild(p6);
      card.appendChild(p7);
      card.appendChild(p8);
  
      cards.appendChild(card);

  });

  function SetOrderDate() {
    let totalcarbohydrates = 0;

    document.getElementById("orderDate").value = new Date().toISOString().split('T')[0];
    totalcarbohydrates = totalcarbohydrates + carbohydrates[document.getElementById("fruit1").selectedIndex]
                                            + carbohydrates[document.getElementById("fruit2").selectedIndex]
                                            + carbohydrates[document.getElementById("fruit3").selectedIndex];
    document.getElementById("carbohydrates").value = totalcarbohydrates;
  }