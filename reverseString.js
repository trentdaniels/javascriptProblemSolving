// Write a function that takes a string as input and returns the string reversed
// i.e. “Hello” will be returned as “olleH”

function reverseString(string) {
    let splitString = string.split('');
    let reversedSplitString = splitString.reverse();
    let reversedString = reversedSplitString.join('');
    return reversedString;
}

console.log(reverseString("Trent"));