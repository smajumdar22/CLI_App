'use strict';

const differentTypesOfFruit=(arr) => {
    const distintFruits = [...new Set(arr.map(x => x.fruit_type))];
        let totalCount = 0;
        for (let i = 0; i < distintFruits.length; i++) {
            totalCount++;
        }
        console.log(`Total types of fruit: \n ${totalCount}`);
}

module.exports = differentTypesOfFruit;