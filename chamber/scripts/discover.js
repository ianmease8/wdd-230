if(!localStorage.getItem('lastVisit')){
    localStorage.setItem('lastVisit',Date.now())
    document.querySelector('#diff').innerHTML = "Welcome";
}
else{
    let currentdate=Date.now();
    let lastVisit = localStorage.getItem('lastVisit');
    let diff = (currentdate-lastVisit)/1000/60/60/24;
    diff = Math.round(diff)
    document.querySelector("#diff").innerHTML = diff;
    localStorage.setItem('lastVisit', Date.now());
}