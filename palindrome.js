//Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
    // find the length of a string
    const len = inputString.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (inputString[i] !== inputString[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(inputString("abba"));