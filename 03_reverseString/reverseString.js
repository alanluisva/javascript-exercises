const reverseString = function(string) {
    let array = string.split("")
    let finalString = "";

    for (let i = array.length - 1 ; i >= 0; i--) {
        finalString += array[i]
    } return finalString
};

// Do not edit below this line
module.exports = reverseString;
