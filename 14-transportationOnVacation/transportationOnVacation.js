const transportationOnVacation = (d) => {
    let carCost = ( d * 40 );
    if( d >= 7 ) { return carCost -= 50; }
    if( d >= 3 ) { return carCost -= 20; }
    return carCost;
};


module.exports = transportationOnVacation;