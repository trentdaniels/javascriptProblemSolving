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
    let stringNumber = number.toString()
    let arrayOfNumbers = stringNumber.split('');
    let sum;
    while (sum !== 1) {
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            let digit = arrayOfNumbers[i];
            let digitSquared = digit[i] * digit[i];
            sum = digitSquared[i] + digitSquared[i+1];
        }
        if (sum === 1) {
            return "It's a happy number!";
        }
        else {
            return "Not happy!";
        }
    }

}

let result = isHappyNumber(19);
console.log(result);