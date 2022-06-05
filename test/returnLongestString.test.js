const returnTheLongestString = require('../solve/returnLongestString');

describe('', () => {
    test('should return a number of negative values in array', () => {
        expect(returnTheLongestString(['help', 'me'])).toBe('help');
        expect(returnTheLongestString(['I', 'need', 'candy'])).toBe('candy');
        expect(returnTheLongestString(['hello', 'world!'])).toBe('world!');
        expect(returnTheLongestString(['github', 'message', 'push'])).toBe('message');
        expect(returnTheLongestString(['-011', '-12', '-123', '-123456'])).toBe('-123456');
        expect(returnTheLongestString(['-1', '-23', '-32','-34', '-444'])).toBe('-444');
    });
});