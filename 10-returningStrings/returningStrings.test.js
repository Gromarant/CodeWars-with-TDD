const returningStrings = require('./returningStrings');

describe('returningStrings', () => { 

    test('should receive a name and return a greeting', () => { 
        const expected = `Hello, Marian how are you doing today?`;
        const result = returningStrings( 'Marian' );
        expect(result).toBe(expected);
     });
 });