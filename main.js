const csv = require('csv-parser');
const fs = require('fs');
const nodePath = require('path');
const results = [];
const totalFruits = require('./methods/totalFruit.js');
const differentTypesOfFruit = require('./methods/totalTypesOfFruit.js');
const oldestFruit = require('./methods/oldestFruit.js');
const distinctFruit = require('./methods/categoryFruit.js');
const fruitsByCharacteristics = require('./methods/fruitByCharacteristics.js');
const { checkArrayEquality } = require('./methods/helperFunctions');
const headerValues = ['fruit_type', 'age_in_days', 'characteristic1', 'characteristic2']


let path;
const takeInput = () => {
    let parsedInput = process.argv.slice(2);
    for (let i = 0; i < parsedInput.length; i++) {
        path = parsedInput[i];
    }
}
takeInput();
let ext = nodePath.extname(path);
if (ext == '.csv') {
    fs.createReadStream(path)
        .pipe(csv({}))
        .on('data', (data) => results.push(data))
        .on('end', () => {

            let headersFromCsv = [];
            for (key in results[0]) {
                headersFromCsv.push(key);
            }
            if (checkArrayEquality(headerValues, headersFromCsv) === true) {

                totalFruits(results);
                differentTypesOfFruit(results);
                oldestFruit(results);
                distinctFruit(results);
                fruitsByCharacteristics(results);
            }else {
                console.log('Header values should be fruit_type , age_in_days, characteristic1, characteristic2')
            }


        });
} else {
    console.log('Error : File type should be of csv type')
}


