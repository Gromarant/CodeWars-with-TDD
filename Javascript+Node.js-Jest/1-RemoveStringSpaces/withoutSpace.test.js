const withoutSpace = require('./withoutSpace');

describe('withoutSpace', () => { 
    test('should be return an array without spaces', () => { 
        const expected = '8j8mBliB8gimjB8B8jlB';
        const result = withoutSpace('8 j 8   mBliB8g  imjB8B8  jl  B');
        expect(result).toBe(expected);
     });
 });