
// jshint esversion: 6 

'use strict';

// create a random number


const secretNumber = Math.trunc((Math.random() * 20) + 1);

//startting score
let score = 20;

//click function
let startAgain = window.onload = function () {
    //get high score from the localstorage
    let highScore = localStorage.getItem('highscore');
    (document.querySelector('.highscore').textContent= highScore);


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    

    // no input
    if (!guess || guess > 20) {
        document.querySelector('.message').textContent = '⛔️ Please enter a number between 0 and 20! 🤔';
    } else if (guess === secretNumber) {
    //when player wins
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.message').textContent = 'You guessed correctly!!';
            score +5;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';
            if (score > highScore) {
                highScore = score;
                // add highscore to localStorage
                localStorage.setItem('highscore', score);
                document.querySelector('.highscore').textContent = JSON.parse(highScore);
            }
    
    // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Guess is too high 😩';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😫 You lost the game!😭';
        }

    //when guess is too low    
    } else if (guess < secretNumber) {
            if (score > 1) {
            document.querySelector('.message').textContent = 'Guess is too low 🙄';
            score--;
            document.querySelector('.score').textContent = score;
            } else 
            {  
            document.querySelector('.message').textContent = '🎆 You lost the game!🥳 🎇';
            }

        
    }

});
};
// restart the game
document.querySelector('.again').addEventListener('click', function () {
   location.reload(startAgain);
});