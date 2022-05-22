const reverseWord = require('../solve/reverseWord')

describe('', () => {
    test('should reverse a word, when it is longer than 5 characters', () => {
      expect(reverseWord("olá, mundo!")).toBe("olá, odnum!");
    });
});