var fs3 = require('fs');
// What would your total score be if everything goes exactly according to your 
// strategy guide?
const text_input3 = require('../utils/loadText.js');

// read the input file into array of strings
const day3_data = fs3.readFileSync('../day3input.txt', 'utf8').split('\n');

for (let i = 0; i < day3_data.length; i++) {
    const firstHalf = day3_data[i].slice(0, day3_data[i].length / 2);
    const secondHalf = day3_data[i].slice(day3_data[i].length / 2, day3_data[i].length);
    for (let j = 0; j < firstHalf.length; j++) {
        if (firstHalf[j] === secondHalf[j]) {
            console.log('match');
            console.log(firstHalf[j]);
            console.log(secondHalf[j]);
        }
    } 
}