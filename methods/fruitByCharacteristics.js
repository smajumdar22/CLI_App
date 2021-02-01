'use strict';

const fruitsByCharacteristics = (arr) => {
    const result = [...arr.reduce((mp, o) => {
        const key = JSON.stringify([o.fruit_type, o.characteristic1, o.characteristic2]);
        if (!mp.has(key)) mp.set(key, { ...o, count: 0 });
        mp.get(key).count++;
        return mp;
    }, new Map).values()];


    console.log('The various characteristics (count, color, shape, etc.) of each fruit by type:')
    for (let i = 0; i < result.length; i++) {
        console.log(`${result[i].count} ${result[i].fruit_type}: ${result[i].characteristic1} ${result[i].characteristic2}`)
    }
}

module.exports= fruitsByCharacteristics;