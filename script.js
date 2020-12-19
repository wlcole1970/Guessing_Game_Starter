
// jshint esversion: 6 

'use strict';

// create a random number
const secretNumber = Math.trunc((Math.random() * 20) + 1);

//startting score
let score = 20;

//message function
const displayMessage = message => {
    document.querySelector('.message').textContent = message;
};

//score display function

const displayScore = score => {
    document.querySelector('.score').textContent = score;
}

//click function
let startAgain = window.onload = function () {
    //get high score from the localstorage
    let highScore = localStorage.getItem('highscore');
    (document.querySelector('.highscore').textContent= highScore);


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    

    // no input
    if (!guess || guess > 20) {

            displayMessage('🛑 Please enter a number!🛑 ');

    } else if (guess === secretNumber) {
    //when player wins
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('#pageTitle').textContent = "You Won!!!";
            displayMessage('You guessed correctly!!');
            displayScore(score)
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore) {
                highScore = score;
                // add highscore to localStorage
                localStorage.setItem('highscore', score);
                document.querySelector('.highscore').textContent = JSON.parse(highScore);
            }
    
        //when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Guess is too high 😩' : '🤨 Guess is too low 🙄');
            score--;
            displayScore(score);
        } else {
            displayMessage('😫 You lost the game!😭');
        }
    }

});
};
// restart the game
document.querySelector('.again').addEventListener('click', function () {
   location.reload(startAgain);
});