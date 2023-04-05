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













let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
let currentdate = document.lastModified;
document.querySelector('#modified').innerHTML = 'Last updated: ' + currentdate;