# Day 6 - Text File Analyzer

This is a CLI-based **Text File Analyzer** built with Node.js. The app allows users to analyze a text file and provides details such as the total number of words, lines, and characters in the file. The tool supports repeated use, enabling users to analyze multiple files without restarting the program.

---

## Features
- Reads a text file from the user-specified path.
- Displays:
  - Total number of lines.
  - Total number of words.
  - Total number of characters.
- Allows users to analyze multiple files continuously.
- Exit option to quit the program.

---

## Technologies Used
- **Node.js**: For backend logic and file operations.
- **Readline**: To handle user input in the command-line interface.
- **File System (fs)**: To read the file content.

---

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/<your-github-username>/NodeJS-Learning-Projects.git
   cd NodeJS-Learning-Projects/Day6 - Text File Analyzer
   ```

2. Install Node.js dependencies (if any):
    ```bash
    npm init -y
    ```

 3. Ensure Node.js is installed:
    ```bash
    node -v
    ```

## Usage
1. Run the script in your terminal:
    ```bash
    node index.js
    ```
2. Enter the path to the text file you want to analyze:
    ```bash
    Enter the path of the text file to analyze (or type "exit" to quit): example.txt
    ```
    
3. The program will display:
    ```bash
    --- File Analysis Complete ---
    File Path: example.txt
    Total Lines: 20
    Total Words: 120
    Total Characters: 950
    ```

4. After analysis, you can:
    * Enter another file path to analyze a new file.
    * Type exit to quit the program.

## Example Output
    
    Welcome to the Text File Analyzer!

    Enter the path of the text file to analyze (or type "exit" to quit): example.txt

    --- File Analysis Complete ---
    File Path: example.txt
    Total Lines: 20
    Total Words: 120
    Total Characters: 950

    Enter the path of the text file to analyze (or type "exit" to quit): exit
    Exiting... Goodbye!
    
## Contributing
Feel free to submit issues or pull requests if you have improvements for the project. Contributions are always welcome!
 
## License
This project is open-source and available under the [MIT License](https://github.com/edimonndi/NodeJS-Learning-Projects/blob/main/LICENSE).

## Author
* **Edmond T**
* GitHub: [Edimonndi](https://github.com/edimonndi)