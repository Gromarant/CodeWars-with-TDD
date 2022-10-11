const countPositivesSumNegatives = require('./countPositivesSumNegatives.js');

describe('countPositivesSumNegatives', () => { 
    test('should return an empty array if receive an empty array', () => { 
        const expected = [];
        const result = countPositivesSumNegatives([]);
        expect(result).toEqual(expected);
     });

     test('should return an empty array if receive a null array', () => { 
        const expected = [];
        const result = countPositivesSumNegatives(null);
        expect(result).toEqual(expected);
     });    
     
     test('should return and array, where the first element is the count of positives numbers and the second element is sum of negative numbers', () => { 
        const expected = [ 8, -50 ];
        const result = countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);
        expect(result).toEqual(expected);
     }); 
 });