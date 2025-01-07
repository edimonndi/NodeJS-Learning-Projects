# Day19 - Error Logging App

This project demonstrates error logging using Winston.

## Features
- Logs all incoming requests.
- Logs errors to a file (`logs/error.log`).
- Logs combined messages (`logs/combined.log`).

## Requirements
- Node.js
- NPM

## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
    ```

3. Start the app
    ```bash
    npm run dev
    ```

## Technologies Used
- Node.js
- Express.js
- Winston (Logging)

## API Endpoints

- 'GET /api/users': Fetch all users.
- 'POST /api/users': Create a user. Send '{ "name": "Your Name" }' in the request body.

## License
This project is licensed under the `MIT License`.

