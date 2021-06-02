//check to see if the string has the same number of "o" and "x".If the same number of x and o return true,also, when no 
// "x" or "o" is present it should return True 

function XO(str){
    let numberofO = 0;
    let numberofX = 0;
    for (let i=0; i<str.length; i++){
        if(str[i].toLowerCase() === "x"){
            numberofX++
        }
        if(str[i].toLowerCase() === "o"){
            numberofO++
        }

    }
    if (numberofO === 0 && numberofX ===0 ){
        return true;
    } else if (numberofO === numberofX){
        return true;
    } else {
        return false;
    }
}

console.log(XO('xxoo'))
console.log(XO('xxooo'))
console.log(XO("Xxoo"))