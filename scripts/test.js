let date = new Date();
let year = date.getFullYear();


document.querySelector('#feets').innerHTML ='&copy;'+ year; 

let currentdate = document.lastModified;

document.querySelector('#modified').innerHTML = 'Last updated: ' + currentdate;


