// Fibonacci
// A series of numbers in which each number (Fibonacci number ) 
// is the sum of the two preceding numbers. 

// The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// Write a function that does the Fibonacci sequence starting at 1

// HARDER VERSION: Write a function that does the Fibonacci sequence 
// starting at a number that a user inputs

function writeFibonacciSequence() {
    let numberOfDigits = parseInt(prompt('How many spots would you like the sequence to be?'));
    if (numberOfDigits > 0) {
        let total = 0;
        let resultArray = [1];
        for (let i = 1; i < numberOfDigits; i++) {
            if (i === 1) {
                total = 1;
            }
            else {
                total = resultArray[i-2] + resultArray[i-1];
            }
            
            resultArray.push(total);
        }
        return resultArray.join(', ');
    }
    else {
        return 'Oops! Please refresh and enter a valid number';
    }
    
}

let fibonacciSequence = writeFibonacciSequence();
console.log(fibonacciSequence);

//get numbers in the sequence
//start with 1
//add number to it's previous number and add total to string
//print result