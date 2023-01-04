//----- Solution 1:

/* const isItAPalindrome = ( str ) => {

    const originalStr = str.toLowerCase();
    let turnStr = originalStr.split('').reverse().join('');

    if ( originalStr === turnStr ) { return true }
    else { return false };
} */


//----- Solution 2:
const isItAPalindrome = ( str ) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('') ? true : false ;


module.exports = isItAPalindrome;