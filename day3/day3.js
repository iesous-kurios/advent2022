"use strict";
exports.__esModule = true;
var fs3 = require('fs');
var text_input3 = require('../utils/loadText.js');
var day3_data = text_input3.getInputArray('day3input.txt');
var priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var chars = [];
var score = 0;
day3_data.forEach(function (line) {
    // split each line into two equal halves
    var half1 = line.slice(0, line.length / 2);
    var half2 = line.slice(line.length / 2, line.length);
    for (var _i = 0, half1_1 = half1; _i < half1_1.length; _i++) {
        var char = half1_1[_i];
        // see if the character is in the second half
        if (half2.includes(char)) {
            // if it is, add it to the array
            chars.push(char);
            break;
        }
    }
});
// add up the scrore 
for (var _i = 0, chars_1 = chars; _i < chars_1.length; _i++) {
    var c = chars_1[_i];
    score += priorities.indexOf(c) + 1;
}
console.log(score);
