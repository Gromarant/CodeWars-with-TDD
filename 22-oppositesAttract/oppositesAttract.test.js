const oppositesattract = require('./oppositesAttract');

describe( 'oppositesattract', () => { 

    test('should be return true if one flower has a pair number of petals and the other has an odd number of petals ', () => { 
        const expected = true;
        const result = oppositesattract( 1, 4 );
        expect(result).toBe(expected);
    });

    test('should be return false if both flowers have a pair number of petals or have an odd number of petals ', () => { 
        const expected = false;
        const result = oppositesattract( 2, 2 );
        expect(result).toBe(expected);
    });
 });

