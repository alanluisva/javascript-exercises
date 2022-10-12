const findTheOldest = function (array) {
    const oldest = array.sort((a, b) => {
        let date = new Date();
        let year = date.getFullYear();

        if (a["yearOfDeath"] === undefined) {
            a["yearOfDeath"] = year;
        }
        if (b["yearOfDeath"] === undefined) {
            b["yearOfDeath"] = year;
        }

        let age1 = `${a["yearOfDeath"] - a["yearOfBirth"]}`;
        let age2 = `${b["yearOfDeath"] - b["yearOfBirth"]}`;

        if (age1 < age2) {
            return 1;
        } else {
            return -1;
        }
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
