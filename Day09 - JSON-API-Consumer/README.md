# JSON Placeholder API Consumer

A simple CLI application that fetches data (posts, comments, albums) from the JSONPlaceholder API and displays it interactively in the console.

## Features

- **Interactive Menu**: Choose to fetch posts, comments, or albums.
- **Dynamic Data Fetching**: Data is retrieved from the JSONPlaceholder API.
- **Easy Navigation**: View the first 5 results of your choice.
- **Graceful Exit**: Exit the program when done.

## Requirements

Before running this project, ensure you have the following installed:

1. **Node.js** (Download [here](https://nodejs.org))
2. **npm** (comes with Node.js)
3. **Axios** (HTTP client for Node.js)
   - Install it via:
     ```bash
     npm install axios
     ```

## How to Run

1. Clone or download this repository.

2. Navigate to the project folder:
   ```bash
   cd <project-folder>
   ```
3. Install dependencies:
    ```bash
    npm install axios
    ```

4. Run the application:
    ```bash
    node app.js
    ```
5. Follow the interactive menu to fetch data:

   * Posts
   * Comments
   * Albums
    
## EXAMPLE

Welcome to JSONPlaceholder API Consumer!

Choose what to fetch:
1. Posts
2. Comments
3. Albums
4. Exit

    ```vbnet
    Enter your choice (1-4): 1

    Fetching posts from JSONPlaceholder API...

    ID: 1
    Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
    Body: quia et suscipit...

    ID: 2
    Title: qui est esse
    Body: est rerum tempore vitae...

    Fetched and displayed 5 posts successfully!
    ```
## API Source
This project uses the free [JSONPlaceholder API](https://jsonplaceholder.typicode.com).

## License
This project is licensed under the [MIT License](https://github.com/edimonndi/NodeJS-Learning-Projects/blob/main/LICENSE). 