'use strict';

const distinctFruit = (arr) => {
    let count = arr.reduce((res, val) => {
        if (res[val.fruit_type]) {
            res[val.fruit_type]++;
        } else {
            res[val.fruit_type] = 1;
        }
        return res;
    }, {});


    let output = Object.entries(count)
        .sort((a, b) => b[1] - a[1])

    let newMap = new Map(output)

    let iteratorObj = newMap[Symbol.iterator]();
    console.log('The number of each type of fruit in descending order:')
    // Printing keys and values
    for (let item of iteratorObj) {
        console.log(`${item[0]} : ${item[1]}`)
    }
}

module.exports= distinctFruit;