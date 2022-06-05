const returnNumberOfNegative = require('../solve/returnNumberOfNegative');

describe('', () => {
    test('should return a number of negative values in array', () => {
        expect(returnNumberOfNegative([1, -2, 2, -4])).toBe(2);
        expect(returnNumberOfNegative([0, 9, 1])).toBe(0);
        expect(returnNumberOfNegative([4, -3, 2, 1, 0])).toBe(1);
        expect(returnNumberOfNegative([-10, -2, -2])).toBe(3);
        expect(returnNumberOfNegative([-11, -12, -2, -14])).toBe(4);
        expect(returnNumberOfNegative([-1, -23, -32,-34, -44])).toBe(5);
    });
});