const palindromes = function (string) {
    let backwardsString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        backwardsString += string[i];
    }

    let originalWord = string.replace(/[,.!]/g, "").toLowerCase().replace(/\s/g, '')
    let backwardWord = backwardsString.replace(/[,.!]/g, "").toLowerCase().replace(/\s/g, '')

    if (originalWord === backwardWord) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
