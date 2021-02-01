const sortArray = (property) => {
    let sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return (a, b) => {
        if (sortOrder == -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}

const checkArrayEquality = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    };
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            return false;
        };
    };
    return true;
};

module.exports = { sortArray, checkArrayEquality };