//to access a single element use getElement and querySelector
//all 3 below ways will get you a single element 

console.log(document.getElementById("logo"));

const logoEl = document.getElementById("logo");
console.log(logoEl);

console.log(document.querySelector("#logo")) //reccomended 

//to access multiple element 

let choresEl = document.getElementsByClassName("chore")

console.log(choresEl)

let choresOptionalEL = document.getElementsByTagName("li")
console.log(choresOptionalEL)

let headingEl = document.getElementsByTagName("h2")
console.log(headingEl)

let paragraphEl = document.querySelectorAll(".chore , .random-paragraps") //querySelector is the most flexible one
console.log(paragraphEl)