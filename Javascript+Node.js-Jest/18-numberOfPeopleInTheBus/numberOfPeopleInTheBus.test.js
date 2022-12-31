const numberOfPeopleInTheBus = require('./numberOfPeopleInTheBus');

describe('numberOfPeopleInTheBus', () => { 

    test('should return an integer numbre >= 0', () => { 
        const expected = 0;
        const result = numberOfPeopleInTheBus([[0,0]]);
        expect(result).toBe(expected);
     });

     test('should receive an array of arrays with any size and return a integer number >= 0', () => { 
        const expected = 17;
        const result = numberOfPeopleInTheBus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
        expect(result).toBe(expected);
     });
 });