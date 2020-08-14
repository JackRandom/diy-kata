const reachDestination = (distance, speed) => {


    let travelTime = distance / speed; 
    result = (Math.round(travelTime * 2) / 2).toFixed(1);
    
    return result;
};

module.exports = reachDestination;