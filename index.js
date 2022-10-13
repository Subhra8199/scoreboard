let btnHome = document.getElementById("btn-home")
let btnGuest = document.getElementById("btn-guest")
let homeScore = document.getElementById("home-scr")
let guestScore = document.getElementById("guest-scr")


let count = 0
let oppos = 0 

function click1(){
    count = count +1
    homeScore.textContent = count
    
    
}
function click2(){
    count = count + 2
    homeScore.textContent = count
    
}
function click3(){
    count = count + 3
    homeScore.textContent = count
   
}

function clickA(){
    oppos = oppos +1
    guestScore.textContent = oppos
}
function clickB(){
    oppos = oppos +2
    guestScore.textContent = oppos
}
function clickC(){
    oppos = oppos +3
    guestScore.textContent = oppos
}

