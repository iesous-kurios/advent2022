var fs2 = require('fs');
// What would your total score be if everything goes exactly according to your 
// strategy guide?
var text_input2 = require('../utils/loadText.js');
// read the input file into array of strings
var day2_data = fs2.readFileSync('../day2input.txt', 'utf8').split('\n');
var challengerOptions = {
    'A': 'Rock',
    'B': 'Paper',
    'C': 'Scissors'
};
var youOptions = {
    'X': 'Rock',
    'Y': 'Paper',
    'Z': 'Scissors'
};
var optionValues = {
    'Rock': 1,
    'Paper': 2,
    'Scissors': 3,
    'Win': 6,
    'Lose': 0,
    'Draw': 3
};
var yourScore = 0;
var yourScore2 = 0;
// console log each line of strings in input file
day2_data.forEach(function (line) {
    // Rock beats Scissors
    // Scissors beats Paper
    // Paper beats Rock
    // add points to your score based on what you chose
    if (line[0] === 'A' && line[2] === 'X') {
        yourScore += optionValues.Draw;
        yourScore += optionValues.Rock;
        // X means I need to lose, so I need to choose Z
        yourScore2 += optionValues.Lose;
        yourScore2 += optionValues.Scissors;
    }
    if (line[0] === 'A' && line[2] === 'Y') {
        yourScore += optionValues.Win;
        yourScore += optionValues.Paper;
        // Y means I need to draw, so I need to choose X
        yourScore2 += optionValues.Draw;
        yourScore2 += optionValues.Rock;
    }
    if (line[0] === 'A' && line[2] === 'Z') {
        yourScore += optionValues.Lose;
        yourScore += optionValues.Scissors;
        // Z means I need to win, so I need to choose Y
        yourScore2 += optionValues.Win;
        yourScore2 += optionValues.Paper;
    }
    if (line[0] === 'B' && line[2] === 'X') {
        yourScore += optionValues.Lose;
        yourScore += optionValues.Rock;
        // X means I need to lose, so I need to choose Z
        yourScore2 += optionValues.Lose;
        yourScore2 += optionValues.Rock;
    }
    if (line[0] === 'B' && line[2] === 'Y') {
        yourScore += optionValues.Draw;
        yourScore += optionValues.Paper;
        // Y means I need to draw, so I need to choose Y
        yourScore2 += optionValues.Draw;
        yourScore2 += optionValues.Paper;
    }
    if (line[0] === 'B' && line[2] === 'Z') {
        yourScore += optionValues.Win;
        yourScore += optionValues.Scissors;
        // Z means I need to win, so I need to choose Z
        yourScore2 += optionValues.Win;
        yourScore2 += optionValues.Scissors;
    }
    if (line[0] === 'C' && line[2] === 'X') {
        yourScore += optionValues.Win;
        yourScore += optionValues.Rock;
        // X means I need to lose, so I need to choose Y
        yourScore2 += optionValues.Lose;
        yourScore2 += optionValues.Paper;
    }
    if (line[0] === 'C' && line[2] === 'Y') {
        yourScore += optionValues.Lose;
        yourScore += optionValues.Paper;
        // Y means I need to draw, so I need to choose Z
        yourScore2 += optionValues.Draw;
        yourScore2 += optionValues.Scissors;
    }
    if (line[0] === 'C' && line[2] === 'Z') {
        yourScore += optionValues.Draw;
        yourScore += optionValues.Scissors;
        // Z means I need to win, so I need to choose X
        yourScore2 += optionValues.Win;
        yourScore2 += optionValues.Rock;
    }
});
console.log(yourScore);
console.log(yourScore2);
