var fs3 = require('fs');
// What would your total score be if everything goes exactly according to your 
// strategy guide?
var text_input3 = require('../utils/loadText.js');
// read the input file into array of strings
var day3_data = fs3.readFileSync('../day3input.txt', 'utf8').split('\n');
for (var i = 0; i < day3_data.length; i++) {
    var firstHalf = day3_data[i].slice(0, day3_data[i].length / 2);
    var secondHalf = day3_data[i].slice(day3_data[i].length / 2, day3_data[i].length);
    for (var j = 0; j < firstHalf.length; j++) {
        if (firstHalf[j] === secondHalf[j]) {
            console.log('match');
            console.log(firstHalf[j]);
            console.log(secondHalf[j]);
        }
    }
}
