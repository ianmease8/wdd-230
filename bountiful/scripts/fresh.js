const url = "https://andejuli.github.io/wdd230/fruit.json"


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    return data;

}

    const fruits = await getProphetData();

    let firstfruit = fruits[0];

    let f1 = document.querySelector(".f1");

    f1.textContent = firstfruit.name;











let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
let currentdate = document.lastModified;
document.querySelector('#modified').innerHTML = 'Last updated: ' + currentdate;