const palindromeWords = require('../solve/palindromeWord');

describe('', () => {
    test ('should check if the word is a palindrome.', () => {
        expect(palindromeWords('ama')).toBeTruthy()
        expect(palindromeWords('Ame o poema')).toBeTruthy()
        expect(palindromeWords('A base do teto desaba')).toBeTruthy()
        expect(palindromeWords('A mala estava nova')).toBeFalsy()
        expect(palindromeWords('A casa caiu')).toBeFalsy()
        expect(palindromeWords('elefante')).toBeFalsy()
    });
});