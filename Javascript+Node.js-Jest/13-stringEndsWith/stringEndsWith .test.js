const stringEndsWith  = require('./stringEndsWith ');

describe('stringEndsWith ', () => { 

    test('should receive two strings, compare them, if the first ends with the second return true', () => { 
        const expected = true;
        const result = stringEndsWith ('abc', 'bc');
        expect(result).toBe(expected);
     });

    test('should receive two strings, compare them, if the first does not end with the second return false', () => { 
        const expected = false;
        const result = stringEndsWith ('abc', 'd');
        expect(result).toBe(expected);
    });

 });
