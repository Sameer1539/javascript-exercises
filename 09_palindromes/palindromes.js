const palindromes = function (str) {
    str = str.toLowerCase();
    const lastChar = str.length - 1;
    let reversed = "";
    let updatedStr = "";
    for (let i = lastChar; i >= 0; i--){
        let upperCaseIndex = str[i].toUpperCase();
        if (upperCaseIndex >= 'A' && upperCaseIndex <= 'Z') {
            reversed += str[i];
        }
    }
    for (let i = 0; i <= lastChar; i++) {
        let upperCaseIndex = str[i].toUpperCase();
        if (upperCaseIndex >= 'A' && upperCaseIndex <= 'Z')
        {
            updatedStr += str[i];
        }
    }
    if (reversed == updatedStr) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;