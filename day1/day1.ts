const fs = require('fs');
const text_input = require('./utils/loadText.js');


const day1_data = text_input.getInputArray('day1input.txt');


let current = 0;
let biggestSum = 0;
let arrayOfSums = Array<number>();

day1_data.forEach((line) => {
    if (!Number.isNaN(line)) {
        current += Number(line);
    } else {
        if (current > biggestSum) {
            biggestSum = current;
        }
        arrayOfSums.push(Number(current));
        current = 0;
    }
});


console.log(biggestSum);

// Part 2

let answer = arrayOfSums.sort(function(a, b){return b-a});

// console log the top 3 values in the array
console.log(answer[0], answer[1], answer[2]);


// add first 3 values of answerPart2 together
console.log(answer[0] + answer[1] + answer[2]);