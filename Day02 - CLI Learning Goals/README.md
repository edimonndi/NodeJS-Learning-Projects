# CLI Learning Goals

A simple CLI tool built with Node.js to manage and track your learning goals. This tool allows you to add, view, and delete goals directly from the command line interface.

## Features

- **View Goals**: Displays the list of your current learning goals.
- **Add Goal**: Allows you to add new learning goals.
- **Delete Goal**: Removes a goal from the list.
- **Main Menu Loop**: After completing an action, you can choose to return to the main menu or exit.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/edimonndi/NodeJS-Learning-Projects.git
     ```

2. Navigate to the project directory:
    ```bash
    cd NodeJS-Learning-Projects/Day2-CLI-Tool
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Ensure index.js is executable:
    ```bash
    chmod +x index.js
    ```

## Installation
To run the CLI tool, use the following command in your terminal:
    ```bash
    node index.js
    ```
You will be prompted with a menu where you can choose to:

1. **View Goals**: View your current learning goals.
2. **Add Goal**: Add a new learning goal.
3. **Delete Goal**: Delete a goal from the list.
4. **Exit**: Exit the application.
After completing any action, you can return to the main menu or exit.

## How It Works
- **The application stores your learning goals in a goals.json file.*
- **It uses Node.js core modules like fs (File System) and readline for file handling and user interaction.*
- **The goals are saved in JSON format, allowing easy access and modification.*

## Contributing
Feel free to fork this repository, create pull requests, or open issues to improve the functionality of the app.

License
This project is open-source and available under the (MIT License).



### **Explanation of Sections**

- **Project Title & Description**: Briefly explains what the project is about and what features it offers.
- **Installation**: Provides the steps to clone the repository, navigate to the folder, and install dependencies.
- **Usage**: Explains how to run the app and interact with the CLI tool.
- **How It Works**: Describes the core logic and technologies used in the project (such as `fs` for file handling).
- **Contributing**: Encourages contributions to the project by forking, making pull requests, or opening issues.
- **License**: Includes a basic mention of the MIT License (you can adjust or remove this based on your choice of license).
