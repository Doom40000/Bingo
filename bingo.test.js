"use strict";

const { readFileSync } = require('fs');
const { noSpace, calledNumbers } = require('./bingo')


test('readFileSync Part1 should return a string of numbers', () => {
  const data = readFileSync("Part1.txt", "utf-8");
  expect(data).toBeTruthy();
  expect(typeof data).toBe("string");
});

test('noSpace to have no empty entries', () => {
  const spaceCheck = noSpace.includes('');
  expect(spaceCheck).toBe(false);
});

test('calledNumbers to be an array of numbers', () => {
  const arrayCheck = (calledNumbers) && Array.isArray(calledNumbers);
  expect(arrayCheck).toBe(true);

  const arrayNumberCheck = calledNumbers.some(item => isNaN(item))
  expect(arrayNumberCheck).toBe(false);
});