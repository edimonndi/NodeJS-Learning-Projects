# Day 18 - Input Validation Middleware

## Project Overview
This project demonstrates how to add input validation middleware to a Node.js API using the **Express** framework and **Joi** for validation. The API manages a user profile system with endpoints for fetching and creating users.

---

## Features
- **Input Validation**: Middleware to validate user input for creating new users.
- **Database Integration**: Uses MySQL for storing user data.
- **RESTful API**: Endpoints for user management (GET and POST).
- **Environment Variables**: Secure configuration using `.env` file.

---

## Project Structure
Day18-Input-Validation-Middleware/ 
├── app.js 
├── config/ 
│ └── db.js 
├── controllers/ 
│ └── userController.js 
├── middleware/ 
│ └── validationMiddleware.js 
├── routes/ 
│ └── userRoutes.js 
├── .env 
├── package.json 
└── README.md

## Getting Started

### Prerequisites
- Node.js installed (v14 or later recommended)
- MySQL server installed
- A code editor (e.g., VS Code)

---

### Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Day18-Input-Validation-Middleware

2. **Install Dependencies**
    ```bash
    npm install
    ```
3. **Set Up the Environment Create a `.env` file in the root directory and configure the following:**
    ```bash
    PORT=3000
    ```
4. **Set Up the Database**
    - Log in to your MySQL server and execute the following commands:
    ```sql
    CREATE DATABASE user_management;

    USE user_management;

    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL
    );
    ```
## Running the Application

1. **Start the server:**
    ```bash
    nodemon app.js
    ```
2. **Use an API client like `Postman` or `cURL` to interact with the API.**

## API Endpoints
### GET /users
- Description: Fetch all users from the database.
- Response:
    ```json
    [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com"
        }
    ]
    ```

### POST /users
- Description: Create a new user.

- Request Body:

    ```json
    {
        "name": "Jane Doe",
        "email": "jane.doe@example.com"
    }
    ```
- Response:
    ```json
    {
        "message": "User created",
        "userId": 2
    }
    ```
- Validation Errors:
    ```json
    {
        "error": "\"name\" is required"
    }
    ```
## Technologies Used
- `Node.js`: Backend runtime
- `Express`: Web framework
- `Joi`: Input validation library
- `MySQL`: Database management system
- `Dotenv`: Environment variable management

## License
This project is licensed under the (MIT)[License].

