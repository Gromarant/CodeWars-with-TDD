const isItAPalindrome = require('./isItAPalindrome.js');

describe ( 'isItAPalindrome', () => {

    test ( 'should return true if turn string is equal to original string', () => {
        const expected = true;
        const result = isItAPalindrome('Abba');
        expect(result).toBe(expected);
    })

    test ( 'should return false if turn string is different to original string', () => {
        const expected = false;
        const result = isItAPalindrome('case');
        expect(result).toBe(expected);
    })
} );