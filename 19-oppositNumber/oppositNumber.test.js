const oppositNumber = require('./oppositNumber');

describe('oppositNumber', () => { 

    test('should return 0 if receive 0', () => { 
        const expected = 0;
        const result = oppositNumber(0);
        expect(result).toBe(expected);
     });

     test('should return a same number in positive if receive a negative number', () => { 
        const expected = 12525220.3325;
        const result = oppositNumber(-12525220.3325);
        expect(result).toBe(expected);
     });

     test('should return a same number in negative if receive a positive number', () => { 
        const expected = -4.25;
        const result = oppositNumber(4.25);
        expect(result).toBe(expected);
     });
 });