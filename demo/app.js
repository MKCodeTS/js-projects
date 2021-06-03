console.log("Hello World")

console.log("another line")

for ( let i=0; i<10; i++){
    console.log("increasing " + i)
}

let h1Element = document.querySelector("h1");

h1Element.style.color= "blue";

let content = document.createElement("p");

content.innerHTML = "hey this is a new content inside the tag p";

document.querySelector("body").appendChild(content);