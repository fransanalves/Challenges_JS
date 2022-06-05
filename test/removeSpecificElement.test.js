const removeSpecificElement = require('../solve/removeSpecificElement');

describe('', () => {
    test('should remove the specific element from the array.', () => {
        expect(removeSpecificElement([1, 2, 3], 3)).toStrictEqual([1, 2]);
        expect(removeSpecificElement([1, 2, 3], 2)).toStrictEqual([1, 3]);
        expect(removeSpecificElement([1, 2, '2'], 2)).toStrictEqual([1, '2']);
        expect(removeSpecificElement([false, '4', 1], '4')).toStrictEqual([false, 1]);
        expect(removeSpecificElement([1, 2, '8', 1], 1)).toStrictEqual([2, '8']);
        expect(removeSpecificElement([1, 5, 4, 'ola'], 4)).toStrictEqual([1, 5, 'ola']);
    });
});