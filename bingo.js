"use strict";
const { readFile } = require("fs").promises;

async function getData(file) {
  try {
    const data = await readFile(file);
    return data.toString();
  } catch (err) {
    console.error(err);
  }
}

async function returnData(file) {
  try {
    const textData = await getData(file);
    console.log(textData)
    return textData;
  } catch (err) {
    console.error(err);
  }
}

const test = returnData("Part1.txt");
console.log(test);

// const textData = getData("Part1.txt");
// console.log(returnData("Part1.txt"));

// readFile('Part1.txt', (err, data) => {
//   if (err) console.error(err);

//   console.log(data.toString());
// });

function sum(a, b) {
  return a + b;
}

module.exports = { readFile, getData, sum };
