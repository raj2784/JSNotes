let randomNumber = parseInt(Math.random() * 10 * 3 + 1);
//console.log(randomNumber);

const userInput = document.querySelector("#guessField");
const button = document.querySelector("#button");
const guessSlot = document.querySelector(".guesses");
const remaingAttempt = document.querySelector(".remaining");
const guessResult = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParam");

const p = document.createElement("p");

let palyGame = true;
let prevGuess = [];
let guessAttempt = 1;

//console.log(prevGuess);

if (palyGame) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
    console.log(prevGuess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess === "") {
    alert("Please enter valid number");
    userInput.value = "";
  } else if (guess < 1 || guess > 30) {
    alert("Please enter number between 1 to 30");
    userInput.value = "";
  } else {
    prevGuess.push(guess);
    if (guessAttempt === 10 && guess === randomNumber) {
      checkGuess(guess);
      dislayGuess(guess);
    } else if (guessAttempt === 10) {
      checkGuess(guess);
      dislayGuess(guess);
      displayMessage(
        `Game Over, random number on last game was ${randomNumber}`
      );
      endGame();
    } else {
      dislayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You have guessed it right!`);
    userInput.value = "";
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Guess number is too high`);
  } else if (guess < randomNumber) {
    displayMessage(`Guess number is too low`);
  }
}
function dislayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${prevGuess.length}) ${guess} | `;
  remaingAttempt.innerHTML = ` ${10 - guessAttempt}`;
  guessAttempt++;
}

function displayMessage(message) {
  guessResult.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  button.setAttribute("disabled", "");
  userInput.setAttribute("disabled", "");
  p.innerHTML = `<span type="button" id="newGame">Start new game</span>`;
  startOver.appendChild(p);
  palyGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 10 * 3 + 1);
    prevGuess = [];
    guessAttempt = 1;
    guessSlot.innerHTML = "";
    remaingAttempt.innerHTML = `${11 - guessAttempt}`;
    userInput.removeAttribute("disabled", "");
    button.removeAttribute("disabled", "");
    startOver.removeChild(p);
    palyGame = true;
  });
}
