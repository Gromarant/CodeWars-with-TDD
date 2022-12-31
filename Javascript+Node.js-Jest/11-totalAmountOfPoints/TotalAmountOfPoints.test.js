const TotalAmountOfPoints = require('./TotalAmountOfPoints');

describe('TotalAmountOfPoints', () => { 
    test('should receive an array of string and return a number', () => { 
        const expected = 15;
        const result = TotalAmountOfPoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]);
        expect(result).toBe(expected);
     });
 });