'use strict';

const totalFruits= (arr) => {
    let totalNumberOfFruit =0;
    for(let i=0; i< arr.length; i++) totalNumberOfFruit++;
     console.log('Total number of fruit: \n'+ totalNumberOfFruit);
}

module.exports = totalFruits;