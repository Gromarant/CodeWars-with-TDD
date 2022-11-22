const theHighestProfitWins = ( profits ) => {
    profits.sort(( a, b ) => a - b );
    let minAndMaxProfit = [];

    if( profits.length === 1 ) { 
        minAndMaxProfit.push(profits[0], profits[0])
        return minAndMaxProfit;
    };
    if( profits.length > 1 ) {
        minAndMaxProfit.push(profits.shift(), profits.pop());
        return minAndMaxProfit;
    }
    return minAndMaxProfit;
};

module.exports = theHighestProfitWins;