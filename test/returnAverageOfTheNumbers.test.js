const returnTheAverageOfTheNumbers = require('../solve/returnAverageOfTheNumbers');

describe('', () => {
    test('should return the average of the numbers in array.', () => {
        expect(returnTheAverageOfTheNumbers([10, 100, 40])).toBe(50);
        expect(returnTheAverageOfTheNumbers([10, 100, 1000])).toBe(370);
        expect(returnTheAverageOfTheNumbers([-50, 0, 50, 200])).toBe(50);
        expect(returnTheAverageOfTheNumbers([100, 100, 100])).toBe(100);
        expect(returnTheAverageOfTheNumbers([150, 50, 200, 100])).toBe(125);
        expect(returnTheAverageOfTheNumbers([100, 25, 50, 25, 25])).toBe(45);
    })
})