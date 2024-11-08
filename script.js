// all code for this lab to be completed in this file

//CHALLENGE #1
let currentTemperature = 31
console.log("currentTemperature", currentTemperature)

//two possibilities: it's freezing or it's not
if (currentTemperature <= 32) {
    console.log("It's freezing! BRR!") //#1
} else {
    console.log("I can go for a hike today!") //#2
}

//CHALLENGE #2
let age1 = 47
let age2 = 47

//3 possibilities: older, younger, or the same age
// if... else if statement

if (age1 > age2) { //older
    console.log("Respect!")
} else if (age1 < age2) { //younger
    console.log("Whippersnapper")
} else if (age1 === age2) { //same age
    console.log("Cool!")
} else { //capture errors - pro level
    console.log("Error! Try again")
}