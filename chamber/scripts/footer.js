let dates = new Date();
let years = dates.getFullYear();
let days = dates.getDay();
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

document.querySelector('#feets').innerHTML ='&copy;'+ years; 

let currentdates = document.lastModified;

document.querySelector('#modified').innerHTML = 'Last updated: ' + currentdates;