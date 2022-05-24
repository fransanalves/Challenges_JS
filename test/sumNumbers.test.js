const sumTwoSmallerNumbers = require('../solve/sumNumbers')

describe('', () => {
    test('should sum two numbers', () => {
        expect(sumTwoSmallerNumbers([2, 4, 3, 6])).toBe(5);
        expect(sumTwoSmallerNumbers([20, 24, 33, 16])).toBe(36);
        expect(sumTwoSmallerNumbers([15, 11, 3, 9])).toBe(12);
        expect(sumTwoSmallerNumbers([15, 11, 3, 1])).toBe(4);
        expect(sumTwoSmallerNumbers([5, 7, 8, 21])).toBe(12);
        expect(sumTwoSmallerNumbers([13, 17, 13, 41])).toBe(26);
    });
});