const humanCatDogYears = number => {

    const humanYears = number;
    console.log(humanYears);
    const catYears = (8*4+15+9);
    console.log(catYears);
    const dogYears = (8*5+15+9);
    console.log(dogYears);

    const yearsArray = Array.from(humanYears, catYears, dogYears);
    return yearsArray;
};

module.exports = humanCatDogYears;
