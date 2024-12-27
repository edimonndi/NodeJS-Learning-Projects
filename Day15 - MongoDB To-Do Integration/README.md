
# Day 15 - MongoDB To-Do Integration

This project involves integrating a To-Do application with MongoDB for database storage.

## Features
- Add new To-Do items.
- Retrieve all To-Do items from the MongoDB database.
- Fully functional CRUD operations.

## Prerequisites
- Node.js installed on your system.
- MongoDB installed locally or accessible via an online service.
- MongoDB Compass (optional, for visualizing data).
- `npm` for package management.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/edimonndi/NodeJS-Learning-Projects.git
   ```

2. Navigate to the project directory:
   ```bash
   cd NodeJS-Learning-Projects/Day15 - MongoDB To-Do Integration
   ```

3. Install required dependencies:
   ```bash
   npm install
   npm install express mongoose
   ```

4. Ensure MongoDB is running locally on `localhost:27017`.

5. Start the application:
   ```bash
   node app.js
   ```

## Usage

- **Add To-Do:** Send a POST request to `/todos` with the following JSON body:
  ```json
  {
    "title": "Sample To-Do",
    "completed": false
  }
  ```

- **View To-Do List:** Open a browser and navigate to:
  ```
  http://localhost:3000/todos
  ```

- **Verify in MongoDB:** Use MongoDB Compass or a shell command to check the `todoApp` database and `todos` collection.

## Notes
- Ensure that `mongodb://localhost:27017/todoApp` is accessible in your environment.
- If you encounter any issues, double-check that MongoDB is running and that the database URI matches.

## Made with ❤️ by [@edimonndi](https://twitter.com/edimonndi)
