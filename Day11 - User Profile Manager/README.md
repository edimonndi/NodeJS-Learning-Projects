# User Profile Manager (Day 11 Project)

This project is a **CRUD API for user profiles**, developed with **Node.js**, **Express.js**, and **MySQL** as the database.

## Features

- **Create User**: Add new user profiles.
- **Read User**: Retrieve user details.
- **Update User**: Modify existing user profiles.
- **Delete User**: Remove users from the database.

## Requirements

Before working with this project, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MySQL Server](https://dev.mysql.com/downloads/)
- [Postman](https://www.postman.com/) (for API testing)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/edimonndi/NodeJS-Learning-Projects.git
   ```

2. Navigate to the project folder:
    ```bash
    cd "Day11 - User Profile Manager"
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a .env file in the root of your project and configure your MySQL database:
    ```bash
    DB_HOST=localhost
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password
    DB_NAME=user_profile_manager
    ```

5. Run the database migration script to create the users table:
    ```bash
    node db/migration.js
    ```

6. Start the server:
    ```bash
    npm start
    ```

## API Endpoints
| Method |	Endpoint |	Description
| :------------ |:---------------:| -----:|
| GET |	/users	| Get all users |
| GET |	/users/:id |	Get user by ID |
| POST |	/users |	Create a new user |
| PUT	| /users/:id |	Update user by ID |
| DELETE |	/users/:id |	Delete user by ID |
                
## Folder Structure
 ```bash
 Day11 - User Profile Manager/
├── db/
│   ├── connection.js  # MySQL connection setup
│   ├── migration.js   # Database migration script
├── routes/
│   └── users.js       # Routes for user CRUD operations
├── controllers/
│   └── usersController.js  # User logic handling
├── .env               # Environment variables
├── .gitignore         # Git ignore file
├── package.json       # Project metadata and dependencies
├── app.js             # Main application entry point
└── README.md          # Project documentation
```

## Testing
Use [Postman](https://www.postman.com/) or any other API client to test the endpoints. Make sure the server is running and the database is properly set up before testing.