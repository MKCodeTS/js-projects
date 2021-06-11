//Example: Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjucentElementProduct(inputArray){
    let number = Number.NEGATIVE_INFINITY;
    for (let i=0; i<inputArray.length-1;i++){
        if(inputArray[i]* inputArray[i+1]> number){
            number= inputArray[i]*inputArray[i+1];
        }
    }
    return number;
}

console.log(adjucentElementProduct([1,2, -2,-1]))

// function adjacentElementsProduct(inputArray) {
//     var cb = Number.NEGATIVE_INFINITY;
//     for(var i=0;i<inputArray.length-1;i++){
//         if(inputArray[i]*inputArray[i+1] > cb){
//           cb = inputArray[i]*inputArray[i+1];
//         }
//     }
//   return cb;
// }