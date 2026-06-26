const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 7;
function guessNumber() {
  if (attempts === 0) { console.log(`Game over! The correct number was ${secretNumber}.`); rl.close(); return; }
  rl.question(`Guess a number between 1 and 100. Attempts left: ${attempts}: `, (input) => {
    const guess = parseInt(input);
    if (isNaN(guess)) console.log("Please enter a valid number.");
    else if (guess === secretNumber) { console.log("Congratulations! You guessed the correct number."); rl.close(); return; }
    else if (guess < secretNumber) console.log("Too low!");
    else console.log("Too high!");
    attempts--;
    guessNumber();
  });
}
guessNumber();
