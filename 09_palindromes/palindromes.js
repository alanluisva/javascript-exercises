const palindromes = function (string) {
    let backwardsString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        backwardsString += string[i];
    }

    let originalWord = string.replace("!", "").toLowerCase()
    let backwardWord = backwardsString.replace("!", "").toLowerCase()

    if (originalWord === backwardWord) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
