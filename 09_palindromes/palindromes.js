const palindromes = function (string) {
    // for (let i = 0; i < string.length; i++) {
    //     console.log(string[i])
    // }
    let backwardsString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        backwardsString += string[i];
    }

    if (string === backwardsString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
