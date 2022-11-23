const messigoalsfunction = require('./messiGoalsFunction.js');

describe('messigoalsfunction', () => { 

    test('should return the total goals of Messi', () => { 
        const expected = 17;
        const result = messigoalsfunction( 5, 10, 2 );
        expect(result).toBe(expected);
     });
 });