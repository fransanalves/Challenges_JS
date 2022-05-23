const withdrawMoney = require('../solve/withdrawMoney')

describe('', () => {
    test('should return an array with a minimum of cedulas', () => {
        expect(withdrawMoney(3)).toStrictEqual([2, 1]);
        expect(withdrawMoney(8)).toStrictEqual([5, 2, 1]);
        expect(withdrawMoney(13)).toStrictEqual([10, 2, 1]);
        expect(withdrawMoney(55)).toStrictEqual([50, 5]);
        expect(withdrawMoney(175)).toStrictEqual([100, 50, 20, 5]);
        expect(withdrawMoney(365)).toStrictEqual([100, 100, 100, 50, 10, 5]);
    });
});