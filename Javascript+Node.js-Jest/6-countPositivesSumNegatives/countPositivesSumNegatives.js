const countPositivesSumNegatives = (input) => {
    const isNotArray = !Array.isArray(input);
    let countPositive = 0; 
    let sumNegative = 0;

    if( isNotArray || input.length === 0 ) return [];
    
    input.forEach( num => {
        if( num > 0 ) countPositive += 1;
        if(num < 0) sumNegative += num;
    });
    return [ countPositive, sumNegative ];
};

module.exports = countPositivesSumNegatives;