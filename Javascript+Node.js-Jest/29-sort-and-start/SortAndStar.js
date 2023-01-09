//----- Solution 1: 
/* const SortAndStar = ( strs ) => strs.sort().shift().replaceAll( '',  '***' ).slice( 3, -3); */

//----- Solution 2: 
const SortAndStar = ( strs ) => strs.sort()[0].split('').join( '***' );

module.exports = SortAndStar;