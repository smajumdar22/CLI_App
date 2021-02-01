
const totalFruits = require('../methods/totalFruit.js');
const differentTypesOfFruit = require('../methods/totalTypesOfFruit.js');
const oldestFruit = require('../methods/oldestFruit.js');
const distinctFruit = require('../methods/categoryFruit.js');
const fruitByCharacteristics = require('../methods/fruitByCharacteristics.js');
const { sortArray, checkArrayEquality } = require('../methods/helperFunctions.js');
let spy;
beforeAll(async () => {
  spy = jest.fn();
});


let arr = [
  {
    'fruit_type': 'apple',
    'age_in_days': '1',
    characteristic1: 'red',
    characteristic2: 'sweet'
  },
  {
    'fruit_type': 'orange',
    'age_in_days': '2',
    characteristic1: 'round',
    characteristic2: 'sweet'
  },
  {
    'fruit_type': 'pineapple',
    'age_in_days': '5',
    characteristic1: 'prickly',
    characteristic2: 'sweet'
  },
  {
    'fruit_type': 'apple',
    'age_in_days': '4',
    characteristic1: 'yellow',
    characteristic2: 'sweet'
  }];
test('total number of fruits in an array', () => {

  spy = jest.spyOn(console, 'log');
  totalFruits(arr);
  expect(console.log).toHaveBeenCalledWith('Total number of fruit: \n' + 4);


});
test('diffreent types of fruit', () => {

  spy = jest.spyOn(console, 'log');
  differentTypesOfFruit(arr);
  expect(console.log).toHaveBeenCalledWith(`Total types of fruit: \n 3`);


});

test('oldest fruit', () => {

  spy = jest.spyOn(console, 'log');
  oldestFruit(arr);
  expect(console.log).toHaveBeenCalledWith(`Oldest fruit & age`);
  expect(console.log).toHaveBeenCalledWith(`pineapple: 5`);


});

test('type of fruit in descending order', () => {

  spy = jest.spyOn(console, 'log');
  distinctFruit(arr);
  expect(console.log).toHaveBeenCalledWith(`The number of each type of fruit in descending order:`);
  expect(console.log).toHaveBeenCalledWith(`apple : 2`);
  expect(console.log).toHaveBeenCalledWith(`orange : 1`);
  expect(console.log).toHaveBeenCalledWith(`pineapple : 1`);
});

test('type of fruit in descending order', () => {

  spy = jest.spyOn(console, 'log');
  fruitByCharacteristics(arr);
  expect(console.log).toHaveBeenCalledWith(`The various characteristics (count, color, shape, etc.) of each fruit by type:`);
  expect(console.log).toHaveBeenCalledWith(`1 apple: red sweet`);
  expect(console.log).toHaveBeenCalledWith(`1 apple: yellow sweet`);
  expect(console.log).toHaveBeenCalledWith(`1 orange: round sweet`);
  expect(console.log).toHaveBeenCalledWith(`1 pineapple: prickly sweet`);

});

test('sort', () => {

  var testData = [
    { id: 1, name: "Alpha", city: "Seattle" },
    { id: 2, name: "Beta", city: "Bellevue" },
    { id: 3, name: "Charlie", city: "Redmond" },
    { id: 4, name: "Delta", city: "Factoria" },
  ];

  let expected = [{
    city: "Bellevue",
    id: 2,
    name: "Beta"
  }, {
    city: "Factoria",
    id: 4,
    name: "Delta"
  }, {
    city: "Redmond",
    id: 3,
    name: "Charlie"
  }, {
    city: "Seattle",
    id: 1,
    name: "Alpha"
  }];

  testData.sort(sortArray("city"));
  expect(testData).toEqual(expected);
});

test('equality of arrays', () => {

  let arr1 = ['a','b','c','d'];
  let arr2 = ['a','b','c','d'];
  let arr3 = ['a','b','c','r'];

  checkArrayEquality(arr1,arr2)
  expect(checkArrayEquality(arr1,arr2)).toEqual(true);
  expect(checkArrayEquality(arr1,arr3)).toEqual(false);
});


afterEach(() => {
  jest.clearAllMocks();
});