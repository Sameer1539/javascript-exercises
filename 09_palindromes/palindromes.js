const palindromes = function (str) {
    const lastChar = str.length - 1;
    let reversed = "";
    for (let i = lastChar; i >= 0; i--){
        reversed += str[i];
    }
    if (reversed = str) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
