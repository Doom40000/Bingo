"use strict";
const { readFileSync } = require("fs");

// Serve our data from our txt file.
const data = readFileSync("Part1.txt", "utf-8");
// console.log(data);

let noSpace = data.split("\n");
noSpace.splice(1, 1);

const calledNumbers = noSpace
  .shift()
  .split(",")
  .map((n) => Number(n));
// console.log(calledNumbers);

// Extract the remaining indices and use them in a 2d Matrix.
const card = [];
for (let i of noSpace) {
  card.push(i.split(" ").map((n) => Number(n)));
}

console.log(calledNumbers);
console.log(card);

// Now we can check if specific numbers are included on the card from the called number
// list:
// console.log(calledNumbers.includes(card[0][0]));

module.exports = { noSpace, calledNumbers };
