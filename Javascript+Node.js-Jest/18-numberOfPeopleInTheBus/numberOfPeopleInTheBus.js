const numberOfPeopleInTheBus = ( arr ) => {
    let getIntoTheBus = 0;
    let getOffTheBus = 0;

    arr.forEach(element => {
        getIntoTheBus += element[0];
        getOffTheBus += element[1];
    });
    return getIntoTheBus - getOffTheBus;
};

module.exports= numberOfPeopleInTheBus;