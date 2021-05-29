// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.



function findOutlier(integers){
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i=0; i < integers.length; i++){
        if ((integers[i] % 2 )=== 0) {
            evenNumbers.push(integers[i]);
        }
        else  {

            oddNumbers.push(integers[i])
        }
    }
    if (evenNumbers.length > oddNumbers.length){
        return oddNumbers[0];
    }
    else {
        return evenNumbers[0];
    }
}

console.log(findOutlier([4, 0, 100, 4, 11, 2602, 36]))