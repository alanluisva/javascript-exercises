const repeatString = function(string, num) {
    let originalString = string
    for (let i = 1; i < num; i++) {
        string += originalString
    } return string
};

// Do not edit below this line
module.exports = repeatString;
