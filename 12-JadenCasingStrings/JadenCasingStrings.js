const JadenCasingStrings = ( str ) =>  {
    let splitstrint = str.split( " " );
    let capitalize = [];

    splitstrint.map( string => {
        capitalize.push( string.slice(0, 1).toUpperCase() + string.slice(1) );
    })
    return capitalize.join( ' ' );
}

module.exports = JadenCasingStrings;