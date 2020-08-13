const humanCatDogYears = number => {

    const humanYears = number
    
    const catYears = 4* (number -2)+15+9
    
    const dogYears = 5* (number -2)+15+9

    if (number === 1) return [1,15,15];
    if (number === 2) return [2, 24, 24];
    

    return  [humanYears, catYears, dogYears];
    
};

module.exports = humanCatDogYears;
