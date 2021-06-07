const myButtonEl = document.querySelector("button");
const myInputEl = document.querySelector("input");


function things (){
    console.log("this buttong is clicked")
    console.log("yay!")
    }

myButtonEl.addEventListener("click", things)

myInputEl.addEventListener("click", function (){
    console.log("You are adding an email address")
})

myButtonEl.removeEventListener("click", things)



