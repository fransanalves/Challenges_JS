const returnCharInIndex = require('../solve/returnCharInIndex');

describe('', () => {
    test('should return the character in the given index.', () => {
        expect(returnCharInIndex("olá, mundo!", 1)).toBe("o");
        expect(returnCharInIndex("olá, mundo!", 2)).toBe("l");
        expect(returnCharInIndex("olá, mundo!", 3)).toBe("á");
        expect(returnCharInIndex("olá, mundo!", 4)).toBe(",");
        expect(returnCharInIndex("olá, mundo!", 5)).toBe("m");
        expect(returnCharInIndex("olá, mundo!", 6)).toBe("u");
    })
})