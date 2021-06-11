function countVovels(str){
    const vowels= "aeiou";
    let counter = 0;
    for (let i= 0; i<str.length; i++){
        if (vowels.includes(str[i])){
            counter++;
        }
    }
    return counter; 
}
console.log(countVovels("mariola"))


// function countVowels(str){
//     const vowels = "aeiou";
//     let counter = 0;
//     for (let i=0; i<str.length; i++){
//         if(vowels.includes(str[i])) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countVowels("racecarhdjfurihdjtfhgjtuut"))


function addDigits(n){
    let nuumber= "";
    return nuumber[0] + nuumber[1];
}

console.log(addDigits("23"))