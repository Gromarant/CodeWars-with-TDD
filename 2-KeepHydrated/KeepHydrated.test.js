const KeepHydrated = require('./keepHydrated');

describe('KeepHydrated', () => { 
    test('should return the number of litres, rounded to the smallest value', () => { 
        const expected =  1 ;
        const result = KeepHydrated(2);
        expect(result).toBe(expected);
     });
 });