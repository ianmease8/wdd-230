const url = "https://andejuli.github.io/wdd230/fruit.json"


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    let firstfruit = data[0];
    let secondfruit = data[1];
    let thirdfruit = data[2];
    let fourthfruit = data[3];
    let fifthfruit = data[4];

    let f1 = document.querySelector(".f1");
    let f2 = document.querySelector(".f2");
    let f3 = document.querySelector(".f3");
    let f4 = document.querySelector(".f4");
    let f5 = document.querySelector(".f5");

    f1.textContent = firstfruit.name;
    f2.textContent = secondfruit.name;
    f3.textContent = thirdfruit.name;
    f4.textContent = fourthfruit.name;
    f5.textContent = fifthfruit.name;

}

getProphetData();


const formbutton = document.querySelector('.formbutton');
const clearbutton = document.querySelector('.clearbutton');
const formers = document.querySelector(".form");
const visible = document.querySelector(".visible");

const firstname = document.querySelector('.firstname');
const email = document.querySelector('.email');
const number = document.querySelector('.number');
const fruity1 = document.querySelector('.fruity1');
const fruity2 = document.querySelector('.fruity2');
const fruity3 = document.querySelector('.fruity3');
const fruity4 = document.querySelector('.fruity4');
const fruity5 = document.querySelector('.fruity5');
const info = document.querySelector('.info');
const carbs = document.querySelector('.carbs');
const protein = document.querySelector('.protein');
const fat = document.querySelector('.fat');
const sugar = document.querySelector('.sugar');
const calories = document.querySelector('.calories');

let f1 = document.querySelector(".f1");
let f2 = document.querySelector(".f2");
let f3 = document.querySelector(".f3");
let f4 = document.querySelector(".f4");
let f5 = document.querySelector(".f5");

formbutton.addEventListener('click', () =>{
    const firstnameu = document.querySelector('input[name="fname"]');
    const emailu = document.querySelector('input[name="email"]');
    const numberu = document.querySelector('input[name="phone"]');
    const fruity1u = document.querySelector('input[name="fruit1"]');
    const fruity2u = document.querySelector('input[name="fruit2"]');
    const fruity3u = document.querySelector('input[name="fruit3"]');
    const fruity4u = document.querySelector('input[name="fruit4"]');
    const fruity5u = document.querySelector('input[name="fruit5"]');
    const infou1 = document.querySelector('.tainfo');
    const infou2 = infou1.value;

    firstname.textContent = firstnameu.value;
    email.textContent = emailu.value;
    number.textContent = numberu.value;
    if (fruity1u.checked){
        fruity1.textContent = f1.textContent
    } else{
        fruity1.textContent = "not selected"
    }
    // fruity1.textContent = fruity1u.value;
    fruity2.textContent = fruity2u.value;
    fruity3.textContent = fruity3u.value;
    fruity4.textContent = fruity4u.value;
    fruity5.textContent = fruity5u.value;
    info.textContent = infou2









    visible.style.display = "block";
    formers.style.display = "none";
  
  });








let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
let currentdate = document.lastModified;
document.querySelector('#modified').innerHTML = 'Last updated: ' + currentdate;