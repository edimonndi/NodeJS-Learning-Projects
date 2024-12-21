const axios = require("axios");
const readline = require("readline");

// API base URL
const BASE_API_URL = "https://jsonplaceholder.typicode.com";

// Readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fetch and display data based on user choice
async function fetchData(endpoint) {
  try {
    console.log(`\nFetching ${endpoint} from JSONPlaceholder API...\n`);

    // Make GET request
    const response = await axios.get(`${BASE_API_URL}/${endpoint}`);
    const data = response.data;

    // Display first 5 results
    data.slice(0, 5).forEach((item) => {
      console.log(`ID: ${item.id}`);
      console.log(`Title: ${item.title || "No Title"}`);
      console.log(`Body: ${item.body || "No Body"}\n`);
    });

    console.log(`Fetched and displayed 5 ${endpoint} successfully!`);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Menu for user input
function showMenu() {
  console.log("\nChoose what to fetch:");
  console.log("1. Posts");
  console.log("2. Comments");
  console.log("3. Albums");
  console.log("4. Exit\n");

  rl.question("Enter your choice (1-4): ", async (choice) => {
    switch (choice) {
      case "1":
        await fetchData("posts");
        showMenu();
        break;
      case "2":
        await fetchData("comments");
        showMenu();
        break;
      case "3":
        await fetchData("albums");
        showMenu();
        break;
      case "4":
        console.log("Exiting the program. Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        showMenu();
        break;
    }
  });
}

// Start the program
console.log("Welcome to JSONPlaceholder API Consumer!");
showMenu();
