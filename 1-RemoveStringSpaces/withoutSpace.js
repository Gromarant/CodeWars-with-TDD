// Simple, remove the spaces from the string, then return the resultant string.
//  const withoutSpace = ( array ) => {
//     let removeStringSpaces = array.replaceAll( ' ', '');
//     return removeStringSpaces;
//  };

const withoutSpace = ( array ) => array.split( ' ' ).join('');


 withoutSpace('8 j 8   mBliB8g  imjB8B8  jl  B');

module.exports = withoutSpace;