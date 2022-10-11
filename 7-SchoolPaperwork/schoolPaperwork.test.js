const paperwork = require('./schoolPaperwork.js');

describe('paperwork', () => { 
    test('should return a number of copies that the classmates need', () => { 
        const expected = 25;
        const result = paperwork( 5, 5 );
        expect(result).toBe(expected);
     });
 });