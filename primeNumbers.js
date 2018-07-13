// Prime Numbers
// A prime number is a number that is only divisible by one and itself.
// Write a function that prints out all prime numbers between 1 and 100



//Loop through 1 and 100
//Check if a prime number
//Console.log only prime Numbers

function isPrimeNumber(number) {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= number; j++) {
            if (number / j === number && number / j === 1) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

function printPrimeNumber() {
    let arrayOfNumbers = [];
    for(let i = 1; i <=100; i++) {
        if(isPrimeNumber(i)) {
            arrayOfNumbers.push(i);
        }
    }
    console.log(arrayOfNumbers.split(', '));
}

printPrimeNumber();