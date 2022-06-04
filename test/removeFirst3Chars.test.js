const removeFirst3Characters = require('../solve/removeFirst3Chars');

describe('', () => {
    test('should remove the first 3 characters in the string.', () => {
        expect(removeFirst3Characters("abcdefg")).toBe("defg");
        expect(removeFirst3Characters("1234")).toBe("4");
        expect(removeFirst3Characters("fgedcba")).toBe("dcba");
        expect(removeFirst3Characters("olamundo")).toBe("mundo");
        expect(removeFirst3Characters("aabbccdd")).toBe("bccdd");
        expect(removeFirst3Characters("ffgghhiijj")).toBe("ghhiijj");
    })
})