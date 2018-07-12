"use strict";

// Write a function that takes the string parameter being passed 
// and capitalize the first letter of each word. Words will be 
// separated by only one space. i.e. “hello world” should be outputted 
// as “Hello World”

// function capitalizeLetter(string) {
//     let separatedWords = string.split(" ");
//     separatedWords.forEach(word => {
//         word[0].toUpperCase();
//     });
//     let joinedArray = separatedWords.join(" ");
//     return joinedArray;

// }

// console.log(capitalizeLetter("i am four years old"));

function capitalizePhrase(string) {
    let arrayOfWords = string.split(" ");
    let finalArray =[];
    //capitalize Words in array
    let capitalizeWords = arrayOfWords.forEach(function(word) {
        let firstLetter = word.charAt(0);
        let remainingLetters = word[word.length] - word[0]
        let upperCasedWord= firstLetter.toUpperCase();
        finalArray.push(upperCasedWord + remainingLetters);
    });
    let finalSentence= finalArray.join(' ');
    return finalSentence;
    
}
let test1 = capitalizePhrase("devCodeCamp is awesome");
console.log(test1);