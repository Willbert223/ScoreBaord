// create functions that onclick add the number listed on respective buttons
let homeScore = document.getElementById('home')
let guestScore = document.getElementById('guest')



let homeValue = 0;
let guestValue = 0;


// and add the number to the variables home or guest


function add(num) {
    homeValue += num;
    homeScore.innerText = homeValue
}

function addtwo(num) {
    guestValue += num;
    guestScore.innerText = guestValue
}
