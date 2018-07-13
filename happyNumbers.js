"use strict";

// If a number is happy, then all members of its sequence are happy;
// if a number is unhappy, all members of the sequence are unhappy.

// For example, 19 is happy, as the associated sequence is:

// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1.

// function isHappyNumber(number) {
//     let stringNumber = number.toString();
//     let arrayOfDigits = [];
//     for(let i = 0; i < stringNumber.length; i ++) {
//         arrayOfDigits.push(stringNumber.charAt(i));
//     }
//     for(let j = 0; j < arrayOfDigits.length; j++) {
//         let digit = parseInt(arrayOfDigits[j], 1);

//     }

// }

//get a number and convert to string
//split the string into individual digits (array)

// for each digit in array:
// convert the string into number, square  and sum the digits

//repeat the process until 1 is reached (happy) while loop
//if one is never reached, number is unhappy

function isHappyNumber(number) {
    let sum;
    while (sum !== 1) {
        let arrayOfDigits = getArrayOfNumbers(number);
        sum = computeNewHappyNumber(arrayOfDigits);
        if (sum === 1) {
            return 'Your number is happy!';
        }
        else {
            return 'Your number is unhappy!';
        }
    }

};
function computeNewHappyNumber(array) {
    let newNumber;
    let resultArray = [];
    while (newNumber !== 1) {
        newNumber = 0;
        for (let i = 0; i < array.length; i++) {
            let digit = array[i];
            let digitSquared = Math.pow(digit, 2);
            newNumber += digitSquared;
        }
        resultArray.push(newNumber);
        let checkResultArray = checkForRepeats(resultArray);
        if (checkResultArray === 'Found Repeat') {
            return false;
        };
        array = getArrayOfNumbers(newNumber);
    }
        return newNumber;
   
};

function getArrayOfNumbers (number) {
    let stringNumber = number.toString();
    let arrayOfNumbers = stringNumber.split('');
    return arrayOfNumbers;

}

function checkForRepeats(array) {
    let sortedArray = array.sort();
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i+1]) {
            return 'Found Repeat';
        }
    }
    
}

let result = isHappyNumber(989);
console.log(result);