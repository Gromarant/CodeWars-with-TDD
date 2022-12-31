const transportationOnVacation = require('./transportationOnVacation');

describe('transportationOnVacation', () => { 

    test('should receive a number of days and return a total amount of cost', () => { 
        const expected = 40;
        const result = transportationOnVacation( 1 );
        expect(result).toBe(expected);
     });

     test('should return a total amount of cost minus 20, if the day >= 3', () => { 
        const expected = 180;
        const result = transportationOnVacation( 5 );
        expect(result).toBe(expected);
     });

     test('should return a total amount of cost minus 50, if the day >=7', () => { 
        const expected = 230;
        const result = transportationOnVacation( 7 );
        expect(result).toBe(expected);
     });
 });