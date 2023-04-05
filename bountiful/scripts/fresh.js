const url = "https://andejuli.github.io/wdd230/fruit.json"

let carbsm;
let protm;
let fatm;
let sugarm;
let calom;


let f1carbs;
let f1prots;
let f1fatsm;
let f1sugar;
let f1calom;

let f2carbs;
let f2prots;
let f2fatsm;
let f2sugar;
let f2calom;

let f3carbs;
let f3prots;
let f3fatsm;
let f3sugar;
let f3calom;

let f4carbs;
let f4prots;
let f4fatsm;
let f4sugar;
let f4calom;


let f5carbs;
let f5prots;
let f5fatsm;
let f5sugar;
let f5calom;

async function getProphetData1() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    return data;
}
let data = getProphetData1();
console.table(data);
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


let firstfruit = data[0];
f1nuts = firstfruit.nutritions;
f1carbs = f1nuts.carbohydrates;
f1prots = f1nuts.protein;
f1fatsm = f1nuts.fat;
f1sugar = f1nuts.sugar;
f1calom = f1nuts.calories;

let secondfruit = data[1];
f2nuts = secondfruit.nutritions;
f2carbs = f2nuts.carbohydrates;
f2prots = f2nuts.protein;
f2fatsm = f2nuts.fat;
f2sugar = f2nuts.sugar;
f2calom = f2nuts.calories;

let thirdfruit = data[2];
f3nuts = thirdfruit.nutritions;
f3carbs = f3nuts.carbohydrates;
f3prots = f3nuts.protein;
f3fatsm = f3nuts.fat;
f3sugar = f3nuts.sugar;
f3calom = f3nuts.calories;

let fourthfruit = data[3];
f4nuts = fourthfruit.nutritions; 
f4carbs = f4nuts.carbohydrates;
f4prots = f4nuts.protein;
f4fatsm = f4nuts.fat;
f4sugar = f4nuts.sugar;
f4calom = f4nuts.calories;

let fifthfruit = data[4];
f5nuts = fifthfruit.nutritions;
f5carbs = f5nuts.carbohydrates;
f5prots = f5nuts.protein;
f5fatsm = f5nuts.fat;
f5sugar = f5nuts.sugar;
f5calom = f5nuts.calories;


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
        fruity1.textContent = f1.textContent;
        carbsm = carbsm + f1carbs
        protm  = protm  + f1prots;
        fatm   = fatm   + f1fatsm;
        sugarm = sugarm + f1sugar;
        calom  = calom  + f1calom;
    } else{
        fruity1.textContent = "not selected"
    }
    if (fruity2u.checked){
        fruity2.textContent = f2.textContent;
        carbsm = carbsm + f2carbs
        protm  = protm  + f2prots;
        fatm   = fatm   + f2fatsm;
        sugarm = sugarm + f2sugar;
        calom  = calom  + f2calom;
    } else{
        fruity2.textContent = "not selected"
    }
    if (fruity3u.checked){
        fruity3.textContent = f3.textContent;
        carbsm = carbsm + f3carbs
        protm  = protm  + f3prots;
        fatm   = fatm   + f3fatsm;
        sugarm = sugarm + f3sugar;
        calom  = calom  + f3calom;
    } else{
        fruity3.textContent = "not selected"
    }
    if (fruity4u.checked){
        fruity4.textContent = f4.textContent;
        carbsm = carbsm + f4carbs
        protm  = protm  + f4prots;
        fatm   = fatm   + f4fatsm;
        sugarm = sugarm + f4sugar;
        calom  = calom  + f4calom;
    } else{
        fruity4.textContent = "not selected"
    }
    if (fruity5u.checked){
        fruity5.textContent = f5.textContent;
        carbsm = carbsm + f5carbs
        protm  = protm  + f5prots;
        fatm   = fatm   + f5fatsm;
        sugarm = sugarm + f5sugar;
        calom  = calom  + f5calom;
    } else{
        fruity5.textContent = "not selected"
    }
    // fruity1.textContent = fruity1u.value;
    // fruity2.textContent = fruity2u.value;
    // fruity3.textContent = fruity3u.value;
    // fruity4.textContent = fruity4u.value;
    // fruity5.textContent = fruity5u.value;
    info.textContent = infou2

    const info = document.querySelector('.info');
    carbs.textContent = carbsm;
    protein.textContent = protm;
    fat.textContent = fatm;
    sugar.textContent = sugarm;
    calories.textContent = calom;







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