const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to list all files in a directory
function listFiles(dir, filter = '') {
  try {
    const items = fs.readdirSync(dir);

    items.forEach((item) => {
      const fullPath = path.join(dir, item);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        console.log(`[DIR]  ${fullPath}`);
      } else {
        if (!filter || item.endsWith(filter)) {
          console.log(`[FILE] ${fullPath}`);
        }
      }
    });
  } catch (err) {
    console.error(`Error reading directory: ${err.message}`);
  }
}

// Function to start the CLI
function startCLI() {
  rl.question('Enter the directory path to explore: ', (dir) => {
    rl.question('Enter a file extension to filter by (e.g., .txt) or press Enter to skip: ', (filter) => {
      console.log(`\nListing files in: ${dir}\n`);
      listFiles(dir, filter.trim());
      console.log('\n--- File exploration completed ---\n');

      rl.question('Do you want to explore another directory? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
          startCLI();
        } else {
          console.log('Goodbye!');
          rl.close();
        }
      });
    });
  });
}

// Start the CLI
console.log('\nWelcome to the File Explorer CLI!');
startCLI();
