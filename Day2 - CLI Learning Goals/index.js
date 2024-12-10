#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.join(__dirname, "goals.json");

// Ensure goals.json exists
// Ensure goals.json exists and has valid JSON
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  } else {
    // Check if the file is empty, and initialize it with an empty array if needed
    const data = fs.readFileSync(filePath, 'utf8');
    if (!data.trim()) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    }
  }
  
// Read goals from file
const readGoals = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

// Write goals to file
const writeGoals = (goals) => {
  fs.writeFileSync(filePath, JSON.stringify(goals, null, 2));
};

// Display all goals
const displayGoals = () => {
  const goals = readGoals();
  if (goals.length === 0) {
    console.log("You have no learning goals yet!");
  } else {
    console.log("Your Learning Goals:");
    goals.forEach((goal, index) => console.log(`${index + 1}. ${goal}`));
  }
};

// Add a new goal
const addGoal = (goal) => {
  const goals = readGoals();
  goals.push(goal);
  writeGoals(goals);
  console.log(`Added new goal: "${goal}"`);
};

// Delete a goal
const deleteGoal = (index) => {
  const goals = readGoals();
  if (index < 1 || index > goals.length) {
    console.log("Invalid goal number!");
    return;
  }
  const removed = goals.splice(index - 1, 1);
  writeGoals(goals);
  console.log(`Removed goal: "${removed[0]}"`);
};

// CLI interaction
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\nWelcome to your Learning Goals CLI!");
console.log("Choose an option:");
console.log("1. View Goals");
console.log("2. Add Goal");
console.log("3. Delete Goal");
console.log("4. Exit");

rl.question("Enter your choice: ", (choice) => {
  switch (choice.trim()) {
    case "1":
      displayGoals();
      rl.close();
      break;
    case "2":
      rl.question("Enter your new goal: ", (goal) => {
        addGoal(goal);
        rl.close();
      });
      break;
    case "3":
      displayGoals();
      rl.question("Enter the goal number to delete: ", (index) => {
        deleteGoal(parseInt(index, 10));
        rl.close();
      });
      break;
    case "4":
      console.log("Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid choice!");
      rl.close();
      break;
  }
});
