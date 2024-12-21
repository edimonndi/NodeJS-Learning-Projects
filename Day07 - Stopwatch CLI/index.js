const readline = require("readline");

let startTime = null;
let elapsedTime = 0;
let timerInterval = null;

// Interface to read commands
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Stopwatch CLI - Commands: start | stop | reset | exit");

function printTime() {
  const time = elapsedTime + (startTime ? Date.now() - startTime : 0);
  const seconds = Math.floor(time / 1000);
  console.log(`Elapsed Time: ${seconds} seconds`);
}

function startTimer() {
  if (startTime === null) {
    startTime = Date.now();
    timerInterval = setInterval(printTime, 1000);
    console.log("Stopwatch started...");
  } else {
    console.log("Stopwatch is already running.");
  }
}

function stopTimer() {
  if (startTime !== null) {
    elapsedTime += Date.now() - startTime;
    startTime = null;
    clearInterval(timerInterval);
    console.log("Stopwatch stopped.");
  } else {
    console.log("Stopwatch is not running.");
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  startTime = null;
  elapsedTime = 0;
  console.log("Stopwatch reset.");
}

function handleCommand(command) {
  switch (command.trim().toLowerCase()) {
    case "start":
      startTimer();
      break;
    case "stop":
      stopTimer();
      break;
    case "reset":
      resetTimer();
      break;
    case "exit":
      console.log("Exiting... Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid command. Use start, stop, reset, or exit.");
  }
}

// Loop to accept user input
rl.on("line", (input) => {
  handleCommand(input);
});
