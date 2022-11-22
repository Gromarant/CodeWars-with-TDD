const theHighestProfitWins = require('./theHighestProfitWins.js');

describe('theHighestProfitWins', () => { 

    test('should return as minimun and maximun the same number if the length of array is 1', () => { 
        const expected = [5, 5];
        const result = theHighestProfitWins( [5] );
        expect(result).toEqual(expected);
     });

    test('should return an array with the minimum and maximun number in this order', () => { 
        const expected = [1,5];
        const result = theHighestProfitWins( [1,2,3,4,5] );
        expect(result).toStrictEqual(expected);
     });
 });