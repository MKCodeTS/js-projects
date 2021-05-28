// this function accumulates letters and repeats them  their index times , it also capitalises the first letter and connects it with a "-" 
// eg;abc = A-Bb-Ccc

// we have to loop through eaach letter and then for each letter  and then in that loop for each letter we have to run another loop that repeats that 
// character it's index number of times( nested loop). It is best to break it into 2 functions with nested loop/septerate the logic/seperate the code

function funkyCapitalize(letter, num){
    let result = "";
    for (let i=0; i< num; i++) {
        // if (i ===0 ) { /we can use ternary loop here
        //     result += letter.toUpperCase();{
        // } else {
        //     result += letter.toLowerCase();
        // }
        result +=  i ===0 ? letter.toUpperCase() : letter.toLowerCase();
    }
    return result;
}

console.log(funkyCapitalize("a", 7))

function accum(str){

}


