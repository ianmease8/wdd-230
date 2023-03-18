let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

document.querySelector('#top-date').innerHTML= fulldateUK;
document.querySelector('#feets').innerHTML ='&copy;'+ year; 

let currentdate = document.lastModified;

document.querySelector('#modified').innerHTML = 'Last updated: ' + currentdate;