"use strict";
const { readFileSync } = require("fs");


const data = readFileSync("Part1.txt", "utf-8");
// console.log(data);


let noSpace = data.split('\n');
noSpace.splice(1,1);
console.log(noSpace);


const calledNumbers = noSpace[0].split(',').map(n => Number(n));
console.log(calledNumbers);



module.exports = { noSpace, calledNumbers };