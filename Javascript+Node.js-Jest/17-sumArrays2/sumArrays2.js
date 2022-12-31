const isNumber = ( arr ) => arr.every( element => ( typeof element === 'number'));

const sumArrays2 = ( arr ) => {
    if( arr.length === 0 || !isNumber( arr ) ) { return 0 }
    return arr.reduce( ( sum, val ) => sum + val);
};

module.exports = sumArrays2;