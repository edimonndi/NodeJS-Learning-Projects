const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to analyze text file
function analyzeFile(filePath) {
  try {
    // Read file synchronously
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n'); // Split content into lines

    const lineCount = lines.length;
    const wordCount = content.split(/\s+/).filter(Boolean).length; // Split by spaces and filter out empty strings
    const charCount = content.length;

    console.log('\n--- File Analysis Complete ---');
    console.log(`File Path: ${filePath}`);
    console.log(`Total Lines: ${lineCount}`);
    console.log(`Total Words: ${wordCount}`);
    console.log(`Total Characters: ${charCount}\n`);
  } catch (err) {
    console.error('\nError reading the file:', err.message);
  }
}

// Start the CLI interface
function startCLI() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function askFilePath() {
    rl.question('\nEnter the path of the text file to analyze (or type "exit" to quit): ', (input) => {
      if (input.toLowerCase() === 'exit') {
        console.log('Exiting... Goodbye!');
        rl.close();
      } else {
        const filePath = path.resolve(input);
        analyzeFile(filePath);
        askFilePath(); // Ask again after analysis
      }
    });
  }

  console.log('Welcome to the Text File Analyzer!');
  askFilePath();
}

startCLI();
