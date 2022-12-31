const calculateBMI = ( weight, height ) => {
    let mass = weight / ( height**2 );
 
    if( mass <= 18.5 ) return "Underweight";
    if( mass <= 25.0 ) return "Normal";
    if( mass <= 30.0 ) return "Overweight";
    if( mass > 30 ) return "Obese";
}

module.exports = calculateBMI; 