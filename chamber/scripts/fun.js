const button = document.querySelector('.btn');

// function show(){
//     button.classList.add('newstyle');
// }


// button.addEventListener('click', () => {
//     button.classList.toggle('newstyle');
// });


// hamburger button js 
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('responsive');
});

let date = new Date();
let year = date.getFullYear();


document.querySelector('#feets').innerHTML ='&copy;'+ year; 

let currentdate = document.lastModified;

document.querySelector('#modified').innerHTML = 'Last updated: ' + currentdate;