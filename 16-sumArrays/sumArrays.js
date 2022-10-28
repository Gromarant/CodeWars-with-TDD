const isNumber = ( arr ) => arr.every( element => ( typeof element === 'number'));

const sumArrays = ( arr ) => {
    if( arr.length === 0 || !isNumber( arr ) ) { return 0 }
    
    let sum = 0;
    for( let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
    } 
    return sum;
};

module.exports = sumArrays;