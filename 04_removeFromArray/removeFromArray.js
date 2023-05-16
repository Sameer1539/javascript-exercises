const removeFromArray = function(arr, ...args) {
    // For..of loop for each argument after the array
    for (let itemToRemove of args) {
        // Loop through the array
        for (let i = 0; i < arr.length; i++) {
            // If found, remove the other arguments from the array
            if (itemToRemove === arr[i]) {
                arr.splice(i, 1);
            }
        }
    } 
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
