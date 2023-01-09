const SortAndStar = require('./SortAndStar');

describe( 'SortAndStar',  () => {

    test('should sort it alphabetically (case-sensitive, and based on the ASCII values of the chars the string list and return the first string of the list with "***" between each of its letters', () => { 
    const expected = 'b***i***t***c***o***i***n';
    const result = SortAndStar(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
    expect(result).toStrictEqual(expected);
    });
})