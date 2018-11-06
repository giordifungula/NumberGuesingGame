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

function checkGuess() {
    // stores the inputed value from the user as number
    let userGuess = Number(guessField.value);

  }
  checkGuess();