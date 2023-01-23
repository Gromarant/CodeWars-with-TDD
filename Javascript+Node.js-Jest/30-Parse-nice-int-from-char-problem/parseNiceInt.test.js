const parseNiceInt = require('./parseNiceInt.js');

describe('parseNiceInt', () => { 

    test( 'should return the age of the girl as an integer' , () => {
        const expected = 5;
        const result = parseNiceInt( "5 years old" );
        expect(result).toBe(expected);
    })
 })