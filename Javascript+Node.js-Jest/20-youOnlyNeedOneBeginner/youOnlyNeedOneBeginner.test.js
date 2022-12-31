const youOnlyNeedOneBeginner = require('./youOnlyNeedOneBeginner');

describe('youOnlyNeedOneBeginner', () => { 

    test('should return true if the array contain a value of x', () => { 
        const expected = true;
        const result = youOnlyNeedOneBeginner( [-52, 56, 30, 29, -54, 0, -110], -54);
        expect(result).toBe(expected);
     });

     test('should return false if the array do not contain a value of x', () => { 
        const expected = false;
        const result = youOnlyNeedOneBeginner( [-52, 56, 30, 29, -54, 0, -110], 10);
        expect(result).toBe(expected);
     });
 });