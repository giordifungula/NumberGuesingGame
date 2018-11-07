let randomNumber = Math.floor(Math.random() * 100) + 1;
// stores random rounded number out of 100

// Store the gueses 
const guesses = document.querySelector('.guesses');
// store last result
const lastResult = document.querySelector('.lastResult');
// store how or low value
const lowOrHi = document.querySelector('.lowOrHi');
// for guese submit
const guessSubmit = document.querySelector('.guessSubmit');
// store the actual guese number from user

const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

let name = 'Bingo';
guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    // stores the inputed value from the user as number
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
      // this is true
      guesses.textContent = 'Previous guesses: ';
      // display the previous gueses
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
      // if the guese is equal to random number
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lastResult.padding = '200px'
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      // if the number of counts are 10 game will be over
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
      // if its not the random number and player did not reach 10
      lastResult.textContent = 'Wrong!';
      // player is in gameplay but got it wrong
      lastResult.style.backgroundColor = 'red';
      // change color to red 
      if(userGuess < randomNumber) {
        // if the number is wrong but less or more than random number
        lowOrHi.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        // not a else because it could be more than or equal to which is not what we want
        lowOrHi.textContent = 'Last guess was too high!';
        }
        guessCount++;
        // after they guese the number goes up by 1
        guessField.value = '';
        // after the number of gueses has gone up clear the guesed number
        guessField.focus();
        // focuses to the input text field
      }

  }
  function setGameOver() {
    guessField.disabled = true;
    // disabled user entering more values after game is over
    guessSubmit.disabled = true;
    // cannot click on the submit button 
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  checkGuess();