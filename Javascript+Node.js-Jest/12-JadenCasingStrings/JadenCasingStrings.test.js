const JadenCasingStrings = require('./JadenCasingStrings');

describe('JadenCasingStrings', () => { 
    test('should receive a string and return it with every word capitalize', () => { 
        const expected = "How Can Mirrors Be Real If Our Eyes Aren't Real";
        const result = JadenCasingStrings("How can mirrors be real if our eyes aren't real");
        expect(result).toBe(expected);
     });
 });
