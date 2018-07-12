// For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"

function compressString(string) {
    let count = 0;
    let compressedString = '';
    for(let i = 0; i < string.length; i++) {
        count++;
        if (string[i] !== string[i+1]) {
            compressedString += count + string[i];
            count  = 0;
        } 
        
    }
    return compressedString;
}

let result = compressString('aaaaassssbbbbb');
console.log(result);