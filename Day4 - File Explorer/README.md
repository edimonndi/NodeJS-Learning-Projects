# Day 4: File Explorer

## Description
A simple CLI tool built with Node.js that allows you to explore and list all files in a directory. You can:
- List all files and folders in a directory.
- Filter files by extension (e.g., `.txt`, `.js`).
- Recursively explore subdirectories.

## How to Run
1. Clone this repository.
2. Navigate to the `Day4 - File Explorer` folder.
3. Run the following command:
   ```bash
   node index.js
    ```

## Features
* Lists all files and folders in a given directory.
* Supports filtering by file extension.
* Optionally allows recursive exploration.

## Example
    ```bash
    Enter the directory path to explore: ./example-folder
    Enter a file extension to filter by (e.g., .txt) or press Enter to skip: .txt

    [FILE] ./example-folder/file1.txt
    [FILE] ./example-folder/file2.txt
    [DIR]  ./example-folder/subfolder
    ```

---

### **4. Test the App**

1. Run the script:
   ```bash
   node index.js
   ```
2. Test with different directories and extensions.

