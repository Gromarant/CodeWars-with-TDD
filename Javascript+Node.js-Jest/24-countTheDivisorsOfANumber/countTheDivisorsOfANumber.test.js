const countTheDivisorsOfANumber = require('./countTheDivisorsOfANumber.js');

describe('countTheDivisorsOfANumber', () => { 

    test('should return a count of the divisors of a number', () => { 
        const expected = 4;
        const result = countTheDivisorsOfANumber(10);
        expect(result).toBe(expected);
     });
 });