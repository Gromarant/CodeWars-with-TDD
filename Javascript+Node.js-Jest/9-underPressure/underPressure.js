const underPressure = ( num ) => {
    if( typeof num === 'number' ) {
        const integer = Number( num.toFixed(0) );
        return integer * 2;
    };
};

module.exports = underPressure;