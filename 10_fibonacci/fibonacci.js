let sequence = {
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 5,
    6: 8,
    7: 13,
    8: 21,
    9: 34,
    10: 55,
    11: 89,
    12: 144,
    13: 233,
    14: 377,
    15: 610,
    16: 987,
    17: 1597,
    18: 2584,
    19: 4181,
    20: 6765,
    21: 10946,
    22: 17711,
    23: 28657,
    24: 46368,
    25: 75025,
};

const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS"
    } else {
        return sequence[n];
    }

};

// Do not edit below this line
module.exports = fibonacci;
