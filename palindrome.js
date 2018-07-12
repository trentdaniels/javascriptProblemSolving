// // Palindrome
// // A word, phrase, or sequence that reads the 
// same backward as forward i.e. madam
// // Write a function that takes a user input and checks to s
// ee if it is a Palindrome and reports the result

function isPalindrome(string){
    let wordSpelledForward = string.toLowerCase();
    let wordSpelledBackward = wordSpelledForward.split('').reverse().join('');
    if (wordSpelledForward === wordSpelledBackward) {
        return message() + ' true';
    }
    else {
        return message() + ' false';
    }
}

function message() {
    return 'The word is a Palindrome:';
}

let result1 = isPalindrome('racecar');
console.log(result1);

let result2 = isPalindrome('Trent');
console.log(result2);