
# Express.js To-Do App

A refactored version of the To-Do API built with Express.js. This app provides a simple RESTful API for managing a list of to-do tasks.

## Features

- Fetch all to-do items
- Fetch a single to-do item by ID
- Create a new to-do item
- Update an existing to-do item
- Delete a to-do item
- Modular and clean code structure using Express.js

## Requirements

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [Postman](https://www.postman.com/) (for testing the API)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Day10-Express-ToDoApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

4. The server will be running at `http://localhost:3000`.

## API Endpoints

### GET /api/todos
Fetch all to-do items.

### GET /api/todos/:id
Fetch a single to-do item by its ID.

### POST /api/todos
Create a new to-do item.
- **Request Body**:
  ```json
  {
    "task": "Your task here"
  }
  ```

### PUT /api/todos/:id
Update an existing to-do item by its ID.
- **Request Body** (optional fields):
  ```json
  {
    "task": "Updated task",
    "completed": true
  }
  ```

### DELETE /api/todos/:id
Delete a to-do item by its ID.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
