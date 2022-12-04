var fs3 = require('fs');
var input = fs3.readFileSync('../day3input.txt', 'utf8');
var inputArray = input.split('\n');
var priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var chars = [];
var score = 0;
inputArray.forEach(function (line) {
    var first = line.slice(0, line.length / 2);
    var second = line.slice(line.length / 2, line.length);
    for (var _i = 0, first_1 = first; _i < first_1.length; _i++) {
        var c = first_1[_i];
        if (second.includes(c)) {
            chars.push(c);
            break;
        }
    }
});
chars.forEach(function (c) {
    score += priorities.indexOf(c) + 1;
});
console.log(score);
