function countVowels(str){
    const vowels = "aeiou";
    let counter = 0;
    for (let i=0; i<str.length; i++){
        if(vowels.includes(str[i])) {
            counter++;
        }
    }
    return counter;
}
console.log(countVowels("racecarhdjfurihdjtfhgjtuut"))

//we can also use anohter way of writing for loop : by using the FOR OF loop

let vowels = "aeiou"
// for (i=0; i<vowels.length; i++){
//     console.log(vowels[i])
// }

for (let elem of vowels) {
    console.log(elem)
}