const highestAndLowest = require('./highestAndLowest.js');

describe('highestAndLowest', () => { 

    test('should return a string with the highest an lowest numbers', () => { 
        const expected = "9 -5";
        const result = highestAndLowest("1 9 3 4 -5");
        expect(result).toBe(expected);
    })
 })