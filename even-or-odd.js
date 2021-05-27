//this function checks if the number is odd or even

function evenOrOdd(num){
    if (num % 2 === 0){
        return "EVEN"
    }
    return "ODD"
}
console.log(evenOrOdd(25))


//another way of doing this is with ternary operator
//( fancy way of writing an if statement, when you have to write something quickly with just 1 line)

function evenOrOdd(num){
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(39))
