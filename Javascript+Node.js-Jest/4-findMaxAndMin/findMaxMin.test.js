const min = require( './findMin.js' );
const max = require( './findMax.js' );

describe('min', () => { 
     test('should receive a list of numbers and return the shortest', () => { 
        const expected = -134;
        const result = min( [4,6,2,1,9,63,-134,566] );
        expect(result).toBe(expected);
     });
 });  

 describe('max', () => { 
    test('should receive a list of numbers and return the largest', () => { 
        const expected = 566;
        const result = max( [4,6,2,1,9,63,-134,566] );
        expect(result).toBe(expected);
     });
 });  