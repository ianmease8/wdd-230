const button = document.querySelector('.button');
const button1 = document.querySelector('.button1');

// function show(){
//     button.classList.add('newstyle');
// }


button.addEventListener('click', () => {
    button.classList.toggle('newstyle');
});
button1.addEventListener('click', () => {
    button.classList.toggle('newstyle');
});

// hamburger button js 
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('responsive');
});

let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

document.querySelector('#top-date').innerHTML= fulldateUK;
document.querySelector('#feets').innerHTML ='&copy;'+ year; 

let currentdate = document.lastModified;

document.querySelector('#modified').innerHTML = 'Last updated: ' + currentdate;
if (day==1||day==2){document.querySelector('.wednesday-banner').style.display = "block"};