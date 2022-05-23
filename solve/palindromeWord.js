function palindromeWords(str) {
    let word = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let reverseWord = word.split("").reverse().join("");

    if(word === reverseWord) {
        return true;
    }
    return false;
}
module.exports = palindromeWords;