// Prime Numbers
// A prime number is a number that is only divisible by one and itself.
// Write a function that prints out all prime numbers between 1 and 100


//Loop through 1 and 100
//Check if a prime number
//Console.log only prime Numbers


function printPrimeNumbers() {
    for (let i = 1; i <=100; i ++) {
        let isPrime = true;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && i !== j) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

printPrimeNumbers();

