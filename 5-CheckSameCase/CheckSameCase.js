const isNotLetter = str => str.match(/[A-Za-z]/) === null;
const isUppercase = str => str.match(/[A-Z]/) !== null;
const isLowercase = str => str.match(/[a-z]/) !== null;
const areSameCase = (a, b) => (isUppercase(a) &&  isUppercase(b) ) || (isLowercase(a) && isLowercase(b));

const sameCase = (a, b) => {
    if( isNotLetter(a) || isNotLetter(b)) {
        return -1;
    }
     if(areSameCase(a, b)) {
        return 1;
     }
     return 0;
};

module.exports = sameCase;