import { getInputArray } from "../utils/loadText";


const fs3 = require('fs');

const text_input3 = require('../utils/loadText.js');

const day3_data = text_input3.getInputArray('day3input.txt');

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const chars: string[] = [];
let score = 0;

day3_data.forEach((line) => {
	// split each line into two equal halves
    const half1 = line.slice(0, line.length / 2);
    const half2 = line.slice(line.length / 2, line.length);

    for (const char of half1) {
        // see if the character is in the second half
        if (half2.includes(char)) {
            // if it is, add it to the array
            chars.push(char);
            break
        }
    }
});

// add up the scrore 
for (const c of chars) {
    score += priorities.indexOf(c) + 1;
}

console.log(score);