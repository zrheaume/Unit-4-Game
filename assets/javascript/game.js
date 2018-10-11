// Zach Rheaume
// Unit 4 Game
// game.js
// javaScript / jQuery logic script linked to in ../../index.html

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// HTML PULL
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// Creating object variables for all dynamic html elements

    // Crystal images; for registering clicks
var purpleCrystalImg = $('#crystal-purple');
var blueCrystalImg = $('#crystal-blue');
var yellowCrystalImg = $('#crystal-yellow');
var greenCrystalImg = $('#crystal-green');

var randomNumDisp = $('#random-num-display');
var winDisp = $('#win-display');
var lossDisp = $('#loss-display');
var scoreDisp = $('#score-display');

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// GLOBAL VARIABLE DECLARATION
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// Defining variables whose scopes are script-wide

var winCount = 0;
var lossCount = 0;
var score = 0;

var goalNum;

var purpleCrystalVal = 0;
var blueCrystalVal = 0;
var yellowCrystalVal = 0;
var greenCrystalVal = 0;

var crystalArray = [purpleCrystalVal, blueCrystalVal, yellowCrystalVal, greenCrystalVal];

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// FUNCTION DEFINITIONS
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// Create function to generate and return a random number between 19 and 120
function pickRandomNumber (){
    var tempRandom = 19 + Math.floor(Math.random() * 101);
    return tempRandom;
}

// Create function to assign crystals unique values
function assignCrystalVals(){
    var possibleVals = [1,2,3,4,5,6,7,8,9,10,11,12];
    var selector = Math.floor(Math.random() * possibleVals.length);
    console.log(possibleVals);
    
    purpleCrystalVal = possibleVals[selector];
    possibleVals.splice(selector, 1);
    // console.log(possibleVals);

    selector = Math.floor(Math.random() * possibleVals.length);
    blueCrystalVal = possibleVals[selector];
    possibleVals.splice(selector, 1);
    // console.log(possibleVals);

    selector = Math.floor(Math.random() * possibleVals.length);
    yellowCrystalVal = possibleVals[selector];
    possibleVals.splice(selector, 1);
    // console.log(possibleVals);

    selector = Math.floor(Math.random() * possibleVals.length);
    greenCrystalVal = possibleVals[selector];
    possibleVals.splice(selector, 1);
    // console.log(possibleVals);

    crystalArray = [purpleCrystalVal, blueCrystalVal, yellowCrystalVal, greenCrystalVal];   
}

// Create a function that sets all initial paramaters for the game, also functions to 
//reset the game once a win or loss occurs

function reset(){
    assignCrystalVals();
    console.log(crystalArray);

    goalNum = pickRandomNumber();
    console.log(goalNum);
    randomNumDisp.text(goalNum);

    score = 0;
    scoreDisp.text(score);

}


// Create a function to 

function checkScore(scoreToCheck){
    if(scoreToCheck > goalNum){
        alert("YOU LOST");
        lossCount++;
        lossDisp.text(lossCount);
        reset();
    }
    else if(scoreToCheck === goalNum){
        alert('YOU WON');
        winCount++;
        winDisp.text(winCount);
        reset();
    }
    else{}
}

//Call the reset() function to set the game up for the first round

reset();


purpleCrystalImg.on('click', function(){
    score = score + purpleCrystalVal;
    scoreDisp.text(score);
    checkScore(score);
})

blueCrystalImg.on('click', function(){
    score = score + blueCrystalVal;
    scoreDisp.text(score);
    checkScore(score);
})

yellowCrystalImg.on('click', function(){
    score = score + yellowCrystalVal;
    scoreDisp.text(score);
    checkScore(score);
})

greenCrystalImg.on('click', function(){ 
    score = score + greenCrystalVal;
    scoreDisp.text(score);
    checkScore(score);
})