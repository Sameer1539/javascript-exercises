const sumAll = function(x, y) {
    if (x >= 0 && y >= 0 && typeof x === "number" && typeof y === "number") {
        let sum = 0;
        if (x < y){
            for (let i = x; i <= y; i++) {
                sum += i;
            }
        } else if (x > y) {
            for (let i = y; i <= x; i++) {
                sum += i;
            }
        } 
        return sum;
    } 
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
