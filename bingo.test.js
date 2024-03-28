const { readFile } = require('fs');
const {sum, getData} = require('./bingo.js');
const { string } = require('yargs');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});

test('readFile Part1 should return a string of numbers', () => {
  expect(readFile('Part1.txt', (err, data) => {
    return data.toString();

  })).toBe(typeof string);
});