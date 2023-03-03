const url ="https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayTable(data.prophets);
    displayProphets(data.prophets);

  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cardss'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname} ${prophet.birthdate}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression

function displayTable(prophets){
  prophets.forEach((prophet)=>{
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_birthplace = document.createElement('td');
    let td_birthdate = document.createElement('td');

    td_name.textContent = `${prophet.name} ${prophet.lastname}`
    td_birthplace.textContent= prophet.birthplace;
    td_birthdate.textContent= prophet.birthdate;

    tr.appendChild(td_name);
    tr.appendChild(td_birthplace);
    tr.appendChild(td_birthdate);
 
    document.querySelector('table').appendChild(tr)
 
  })
}


// const mainnav = document.querySelector('.navigation');
// const hambutton = document.querySelector('.ham');
// hambutton.addEventListener('click', () =>{
//     mainnav.classList.toggle('responsive');
// });



const cardbutton = document.querySelector('#cardsbut');
const tablebutton = document.querySelector('#listsbut');
const cardview = document.querySelector(".cardss");
const tableview = document.querySelector(".tabless");

cardbutton.addEventListener('click', () =>{
  cardview.style.display = "flex";
  tableview.style.display = "none";

});

tablebutton.addEventListener('click', () =>{
  tableview.style.display = "block";
  cardview.style.display = "none";
});
// document.getElementById("myDIV").style.display = "none";