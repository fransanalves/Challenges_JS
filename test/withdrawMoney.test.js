const withdrawMoney = require('../solve/withdrawMoney')

describe('', () => {
    test('should return an array with a minimum of cedulas', () => {
        expect(withdrawMoney()).toBe([100, 100]);
    });
});