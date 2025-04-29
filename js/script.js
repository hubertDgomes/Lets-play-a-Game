let personONE = document.querySelector(".personONE")
let personONEname = document.querySelector(".personONEname")
let personONEinput = document.querySelector(".personONEinput")
let personONEbutton = document.querySelector(".personONEbutton")

let warringMSG = document.querySelector(".warringMSG")
let warringMSG2 = document.querySelector(".warringMSG2")

let persomTWO = document.querySelector(".persomTWO")
let personTWOname = document.querySelector(".personTWOname")
let personTWOinput = document.querySelector(".personTWOinput")
let personTWObutton = document.querySelector(".personTWObutton")


personONEbutton.addEventListener("click", function(){
    if(personONEinput.value == ""){
        warringMSG.style.display = "block"
    }
    else{
        personONE.style.display = "none"
        persomTWO.style.display = "block"
    }
})

personTWObutton.addEventListener("click", function(){
    if(personTWOinput.value == ""){
        warringMSG2.style.display = "block"
    }
    else{
        
    }
})