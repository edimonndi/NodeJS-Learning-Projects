#!/usr/bin/env node

const readline = require("readline");

// Set up readline interface for user interaction
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\nWelcome to the Random Number Generator CLI App!");

const askRange = () => {
  rl.question("\nEnter the minimum number: ", (minInput) => {
    const min = parseInt(minInput, 10);
    if (isNaN(min)) {
      console.log("Invalid input. Please enter a valid number.");
      return askRange();
    }

    rl.question("Enter the maximum number: ", (maxInput) => {
      const max = parseInt(maxInput, 10);
      if (isNaN(max) || max <= min) {
        console.log("Invalid input. Maximum must be a number greater than the minimum.");
        return askRange();
      }

      generateRandomNumber(min, max);
    });
  });
};

const generateRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`\n🎲 Your random number is: ${randomNumber}`);

  askRepeat();
};

const askRepeat = () => {
  rl.question("\nDo you want to generate another random number? (y/n): ", (answer) => {
    if (answer.toLowerCase() === "y") {
      askRange();
    } else if (answer.toLowerCase() === "n") {
      console.log("Goodbye! Thanks for using the Random Number Generator.");
      rl.close();
    } else {
      console.log("Invalid input. Please enter 'y' or 'n'.");
      askRepeat();
    }
  });
};

// Start the app
askRange();
