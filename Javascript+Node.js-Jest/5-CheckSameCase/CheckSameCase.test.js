const sameCase = require('./CheckSameCase.js');

describe('sameCase', () => { 
    test('should receive two parameters, if the characters are the same case return 1', () => { 
        const expected = 1;
        const result = sameCase( 'b', 'a' );
        expect(result).toBe(expected);
     });

     test('should receive two parameters, if the characters are of different case return 0', () => { 
        const expected = 0;
        const result = sameCase( 'A', 's' );
        expect(result).toBe(expected);
     });

     test('should receive two parameters, if some of the characters or both are not letters return -1', () => { 
        const expected = -1;
        const result = sameCase( 'H', ':' );
        expect(result).toBe(expected);
     });
 });