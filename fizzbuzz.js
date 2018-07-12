// FizzBuzz
// Write a function that prints every number from 0 to 100
// If a number is divisible by 3, print “fizz” instead of the number
// If a number is divisible by 5, print “buzz” instead of the number
// If a number is divisible by 3 AND 5, print “fizzbuzz” instead of the number


for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    }
    else if (i % 3 === 0) {
        console.log("fizz");
    }
    else if (i % 5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(i);
    }
}