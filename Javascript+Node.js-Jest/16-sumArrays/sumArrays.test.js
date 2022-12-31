const sumArrays = require('./sumArrays');

describe('sumArrays', () => { 
    
    test('should return 0 if the array does not contain any number', () => { 
        const expected = 0;
        const result = sumArrays([ 'one', 'two', 'three']);
        expect(result).toBe(expected);
    });

    test('should return 0 if the array is empty', () => { 
        const expected = 0;
        const result = sumArrays([]);
        expect(result).toBe(expected);
    })

    test('should return a sum of the numbers in the array', () => { 
        const expected = 9.2;
        const result = sumArrays([1, 5.2, 4, 0, -1]);
        expect(result).toBe(expected);
    })
});