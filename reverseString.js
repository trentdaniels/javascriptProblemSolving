function reverseString(string) {
    let splitString = string.split('');
    let reversedSplitString = splitString.reverse();
    let reversedString = reversedSplitString.join('');
    return reversedString;
}

console.log(reverseString("Trent"));