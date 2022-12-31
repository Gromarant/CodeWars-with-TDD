const checkForFactor = require('./checkForFactor.js');

describe('checkForFactor', () => { 

    test('should return true if the factor receive is a factor of base', () => { 
        const expected = true;
        const result = checkForFactor( 6, 3 );
        expect(result).toBe(expected);
     });

     test('should return false if the factor receive is not a factor of base', () => { 
        const expected = false;
        const result = checkForFactor( 7, 2 );
        expect(result).toBe(expected);
     });
 });