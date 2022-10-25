const TotalAmountOfPoints = ( games ) => {
    let score = 0;
    games.forEach( game => {
      const [x, y] = game.split(':');
      
      if(x > y) score += 3;
      if( x === y ) score += 1;
    })
    return score;
};

module.exports = TotalAmountOfPoints;