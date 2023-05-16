const reverseString = function(word) {
    // Split the input into an array
    const splitWord = word.split("");
    // Create an array to store the same as the variable above but in reverse order
    let reverse = [];
    // The for loop starts at the last index of the word and goes back so I create an
    // index variable that'll be used in the for loop to record the word in reverse.
    let index = 0;
    for (let i = splitWord.length - 1; i >= 0; i--) {
        reverse[index] = splitWord[i];
        index++;
    }
    // Finally, reversed is an array and we want to return it as a string so we use join().
    reverse = reverse.join("");
    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
