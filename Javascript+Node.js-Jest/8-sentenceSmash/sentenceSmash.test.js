const smash = require('./sentenceSmash.js');

describe('smash', () => { 
    test('should return a string that contains the elements of the received array', () => { 
        const expected = 'hello world this is great';
        const result = smash(['hello', 'world', 'this', 'is', 'great']);
        expect(result).toBe(expected)
     });
 });