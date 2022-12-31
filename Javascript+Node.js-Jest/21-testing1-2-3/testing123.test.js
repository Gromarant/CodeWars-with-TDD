const testing123 = require('./testing123');

describe('testing123', () => { 

    test('should return an empty array if receive an empty array', () => { 
        const expected = [];
        const result = testing123( [] );
        expect(result).toStrictEqual(expected);
     });

     test('should return every text with a position numbering starting at 1', () => { 
        const expected = ["1: a", "2: b", "3: c"];
        const result = testing123( ["a", "b", "c"] );
        expect(result).toStrictEqual(expected);
     });
 });