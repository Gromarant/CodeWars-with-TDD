 const highestAndLowest = ( str ) => {
    const numArr = str.split(' ').sort( (a, b) => b - a );
    if ( numArr.length >= 2 ) { return `${ numArr.shift() } ${ numArr.pop() }` }
    else { return `${ numArr[0] } ${ numArr[0] }` }
}

module.exports = highestAndLowest;