let personONE = document.querySelector(".personONE") //Whole div
let personONEinput = document.querySelector(".personONEinput") //Input field
let personONEbutton = document.querySelector(".personONEbutton") //Button
let warringMSG = document.querySelector(".warringMSG") //Warring message
//=======================
let personTWO = document.querySelector(".personTWO") //Whole div
let personTWOinput = document.querySelector(".personTWOinput") //Input field
let personTWObutton = document.querySelector(".personTWObutton") //Button
let warringMSG2 = document.querySelector(".warringMSG2") //Warring message
//=======================
let personTHREE = document.querySelector(".personTHREE") //Whole div
let personTHREEinput = document.querySelector(".personTHREEinput") //Input field
let personTHREEbutton = document.querySelector(".personTHREEbutton") //Button
let warringMSG3 = document.querySelector(".warringMSG3") //Warring message
//=======================
let personFOUR = document.querySelector(".personFOUR") //Whole div
let personFOURinput = document.querySelector(".personFOURinput") //Input field
let personFOURbutton = document.querySelector(".personFOURbutton") //Button
let warringMSG4 = document.querySelector(".warringMSG4") //Warring message
//=======================
personONEbutton.addEventListener("click", function(){
        if(personONEinput.value == ""){
            warringMSG.style.display = "block"
        }
        else{
            personTWO.style.display = "block"
            personONE.style.display = "none"
        }
    })
//2nd page
personTWObutton.addEventListener("click" , function(){
        if(personTWOinput.value == ""){
            warringMSG2.style.display = "block" 
        }
        else{
            personTHREE.style.display = "block"
            personTWO.style.display = "none"
        }
})
personTHREEbutton.addEventListener("click", function(){
        if(personTHREEinput.value == ""){
            warringMSG3.style.display = "block"
        }
        else{
            personFOUR.style.display = "block"
            personTHREE.style.display = "none"
        }
})