const extractLast3CharactersFromStr = require('../solve/extractLast3Chars');

describe('', () => {
    test('should extract the last 3 characters from the string.', () => {
        expect(extractLast3CharactersFromStr("abcdefg")).toBe("efg");
        expect(extractLast3CharactersFromStr("1234")).toBe("234");
        expect(extractLast3CharactersFromStr("fgedcba")).toBe("cba");
        expect(extractLast3CharactersFromStr("oba")).toBe("oba");
        expect(extractLast3CharactersFromStr("aabbccdd")).toBe("cdd");
        expect(extractLast3CharactersFromStr("ffgghhiijj")).toBe("ijj");
    });
});