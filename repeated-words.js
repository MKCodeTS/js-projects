//Find words that are repated in a sentence.

//firstly convert the given string to an array using string.split("").

//Secondly, create an map which will store word as key and count as value.

//Now iterate through the stringArray and store the current word to the map. 
//And increase the count for the word each time the word is found.


let words = "I am not gonna live forever, but I wanna live while I am alive";

function countRepeatedWords(sentence) {
  let words = sentence.split(" ");
  let wordMap = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }
  return wordMap;
}

console.log(countRepeatedWords(words));

