"use strict";
const { readFileSync } = require("fs");

// Serve our data from our txt file.
const data = readFileSync("Part1.txt", "utf-8");
// console.log(data);

// Need to convert this into a loop to take care of part 1 and 2.
let noSpace = data.split("\n");
// console.log(noSpace);
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

console.log(card);
console.log(card[0][1]);

function bingoCheck(numbersCalled, card) {
  const stack = [];
  let x = 0;
  let y = 0;

  while (y < card.length) {
    let currentNumber = card[y][x];
    if (numbersCalled.includes(currentNumber)) {
      stack.push(currentNumber);
      if (stack.length === 5) return "Bingo possible!";
      y += 1;
    } else {
      if (stack.length === 0) {
        y = 0;
        x += 1;
      } else {

        stack.pop();
      }
    }
  }

  return "No bingo possible.";
}

// Now we can check if specific numbers are included on the card from the called number
// list:
//console.log(calledNumbers.includes(card[0][0]));

module.exports = { noSpace, calledNumbers };

// TODO Retrieve data from the text file, format is so that you have an array of numbers and
// a 2d matrix that serves as your bingo card.
// TODO  Create an empty array that you can use as a stack, iterate through the bingo card
// by column and row, checking for matching numbers.
