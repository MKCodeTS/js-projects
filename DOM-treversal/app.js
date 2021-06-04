const todoEl = document.querySelector(".todo")
const todosEl = document.getElementsByClassName("todo__item")


// accessing parten node
console.log(todosEl[0].parentNode);
console.log(todoEl.parentNode.parentNode);


//accessing children nodes
console.log(todoEl.childNodes)
console.log(todoEl.firstChild)
console.log(todoEl.lastChild)

//accesing children element nodes 
console.log(todoEl.children)
console.log(todoEl.firstElementChild)
console.log(todoEl.lastElementChild)


// sibling methods

//NODES

//previous Sibling

// next sibling

//ELEMENT NODES

//previous Element Sibling

//next Element Sibling 

console.log(todoEl.firstElementChild.nextElementSibling.nextElementSibling.previousElementSibling)




