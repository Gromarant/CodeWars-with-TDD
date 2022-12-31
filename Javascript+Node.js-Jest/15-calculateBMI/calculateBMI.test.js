const { type } = require('os');
const calculateBMI = require('./calculateBMI');

describe('calculateBMI', () => { 
    
    test('should return "Underweight" if BMI <= 18.5', () => { 
        const expected = "Underweight";
        const result = calculateBMI( 40, 1.62 );
        expect(result).toBe(expected);
     });

     test('should return "Normal" if BMI <= 25.0', () => { 
        const expected = "Normal";
        const result = calculateBMI( 60, 1.62 );
        expect(result).toBe(expected);
     });

     test('should return "Overweight" if BMI <= 30.0', () => { 
        const expected = "Overweight";
        const result = calculateBMI( 70, 1.62 );
        expect(result).toBe(expected);
     });

     test('should return "Obese" if BMI <= 30.0', () => { 
        const expected = "Obese";
        const result = calculateBMI( 90, 1.62 );
        expect(result).toBe(expected);
     });
 });