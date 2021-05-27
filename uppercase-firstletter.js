// makeing the first letter of a word upper is also called the Jaden case ( he is knows for twitting in that style)

function capitalize(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function jadenCase(str){
    let words = str.split(" ");
    let result = [];
    for (let word of words){//for of loop 
        result.push(capitalize(word))
    }
    return result.join(" ")
}

console.log(jadenCase("How can mirrors be real if our eyes are not real"))