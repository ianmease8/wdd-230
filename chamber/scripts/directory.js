const url ="https://ianmease8.github.io/wdd-230/chamber/data.json"

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies);
    displayTable(data.companies);
    displayProphets(data.companies);

  }
  
  getProphetData();

  const displayProphets = (companies) => {
    const cards = document.querySelector('div.cardss'); // select the output container element
  
    companies.forEach((companies) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${companies.name} ${companies.address} ${companies.phone_number} ${companies.website} ${companies.mlevel}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', companies.image);
      portrait.setAttribute('alt', `Portait of ${companies.name}`);
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression

function displayTable(companies){
  companies.forEach((companies)=>{
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_birthplace = document.createElement('td');
    let td_birthdate = document.createElement('td');
    let td_website = document.createElement('td');
    let td_mlevel = document.createElement('td');



    td_name.textContent = companies.name;
    td_birthplace.textContent= companies.address;
    td_birthdate.textContent= companies.phone_number;
    td_website.textContent= companies.website;
    td_mlevel.textContent= companies.mlevel;

    tr.appendChild(td_name);
    tr.appendChild(td_birthplace);
    tr.appendChild(td_birthdate);
    tr.appendChild(td_website);
    tr.appendChild(td_mlevel);

 
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