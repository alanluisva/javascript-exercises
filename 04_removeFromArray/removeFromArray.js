const removeFromArray = function (array, ...removes) {
    function removeValues(elements) {
        return removes.indexOf(elements) == -1;
    }
    return array.filter(removeValues);
};

// Do not edit below this line
module.exports = removeFromArray;
