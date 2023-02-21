if(!localStorage.getItem('lastVisit')){
    localStorage.setItem('lastVisit',Date.now())
    document.querySelector('#diff').innerHTML = "Welcome";
}
else{
    let currentdate=Date.now
    let lastVisit = localStorage.getItem('LastVisit')
    let diff = (currentdate-lastVisit)/1000/60/60/24
    difference = Math.round(difference)
    document.querySelector("#diff").innerHTML = difference;
}