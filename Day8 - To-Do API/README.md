
# To-Do API

This is a simple **RESTful API** for managing a to-do list. The API allows you to add, view, update, and delete to-do items, all stored in an in-memory array.

## Features

- **GET /api/todos**: Retrieve all to-do items.
- **GET /api/todos/:id**: Retrieve a specific to-do item by ID.
- **POST /api/todos**: Add a new to-do item.
- **PUT /api/todos/:id**: Update a to-do item (mark as completed or update task).
- **DELETE /api/todos/:id**: Delete a to-do item.

## Requirements

- **Node.js** (latest stable version) must be installed: [Download Node.js](https://nodejs.org/)
- **Postman** or any API testing tool for sending HTTP requests: [Download Postman](https://www.postman.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/NodeJS-Learning-Projects.git
   cd NodeJS-Learning-Projects/Day8 - To-Do API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

The server will run at: `http://localhost:3000/api/todos`

## Usage

Here are examples of API requests you can send:

### 1. GET all to-do items
- **URL**: `http://localhost:3000/api/todos`
- **Method**: GET

### 2. GET a specific to-do by ID
- **URL**: `http://localhost:3000/api/todos/1`
- **Method**: GET

### 3. POST a new to-do
- **URL**: `http://localhost:3000/api/todos`
- **Method**: POST
- **Body (JSON)**:
  ```json
  {
    "task": "Your new task here"
  }
  ```

### 4. PUT (Update) a to-do
- **URL**: `http://localhost:3000/api/todos/1`
- **Method**: PUT
- **Body (JSON)**:
  ```json
  {
    "task": "Updated task name",
    "completed": true
  }
  ```

### 5. DELETE a to-do
- **URL**: `http://localhost:3000/api/todos/1`
- **Method**: DELETE

## Example Data

Sample response for **GET /api/todos**:
```json
[
  { "id": 1, "task": "Learn Node.js", "completed": false },
  { "id": 2, "task": "Build To-Do API", "completed": false }
]
```

## Tools Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Minimal framework for building RESTful APIs.
- **Postman**: API testing tool.

---

## License

This project is open-source and available under the MIT License.
