const countTheDivisorsOfANumber = ( n ) => {
    let divisorsCount = 0;
    let decrease = n;

    while( decrease > 0 ) {
        if( n % decrease === 0 ) { divisorsCount++ };
        decrease--;
    };
    return divisorsCount;
};

module.exports = countTheDivisorsOfANumber;