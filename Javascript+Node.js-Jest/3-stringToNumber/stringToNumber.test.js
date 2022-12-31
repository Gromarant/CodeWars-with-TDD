const stringToNumber = require('./stringToNumber');

describe('stringToNumber', () => { 
    test('should receive a string and return it value transformed into a number', () => { 
        const expected = 2022;
        const result = stringToNumber( '2022' );
        expect(result).toBe(expected);
     });
 });