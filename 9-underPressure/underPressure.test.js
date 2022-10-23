const underPressure = require('./underPressure');

describe('underPressure', () => { 

     test('should return an integer times 2', () => { 
        const expected = 50;
        const result = underPressure(25);
        expect(result).toBe(expected);
     });
 });