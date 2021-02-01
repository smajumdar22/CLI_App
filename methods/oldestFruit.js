'use strict';
const { sortArray } = require('./helperFunctions.js');

const oldestFruit = (arr) => {
    let max = 0;
    arr.forEach(age => {
        if (age.age_in_days > max) {
            max = age.age_in_days;
        }
    })
    function getFruit(fruit) {
        return fruit.age_in_days === max;
    }
    console.log('Oldest fruit & age');
    const data = arr.filter(getFruit);
    data.sort(sortArray('fruit_type'));
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].fruit_type + ': ' + data[i].age_in_days);
    }
}

module.exports = oldestFruit;