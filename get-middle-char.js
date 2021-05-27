function getMiddle(str){
    if (str.length % 2 === 0){
        return str[str.length /2 -1] +[str.length / 2];
    }
    return str[Math.floor(str.length /2)]//use Math.floor to round them middle number down if the lenght of the str is odd
}

console.log(getMiddle('test'))
console.log(getMiddle('testing'))
console.log(getMiddle('middle'))
console.log(getMiddle("A"))
console.log(getMiddle("masakryczna"))

// ternary operator

// function getMiddle(str){
//     return (str.length % 2 === 0) ? (str[str.length / 2-1] + [str.length / 2]) : str[Math.floor(str.length/2)]
// }
// console.log(getMiddle('test'))
// console.log(getMiddle('testing'))
// console.log(getMiddle('middle'))
// console.log(getMiddle("A"))
// console.log(getMiddle("masakryczna"))