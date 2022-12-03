var fs1 = require('fs');
var text_input1 = require('../utils/loadText.js');
var day1_data = text_input1.getInputArray('day1input.txt');
var current = 0;
var biggestSum = 0;
var arrayOfSums = Array();
day1_data.forEach(function (line) {
    if (!Number.isNaN(line)) {
        current += Number(line);
    }
    else {
        if (current > biggestSum) {
            biggestSum = current;
        }
        arrayOfSums.push(Number(current));
        current = 0;
    }
});
console.log(biggestSum);
// Part 2
var answer = arrayOfSums.sort(function (a, b) { return b - a; });
// console log the top 3 values in the array
console.log(answer[0], answer[1], answer[2]);
// add first 3 values of answerPart2 together
console.log(answer[0] + answer[1] + answer[2]);
