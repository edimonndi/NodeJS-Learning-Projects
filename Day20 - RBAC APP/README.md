
# Day20 - Role-Based Access Control (RBAC)

This project implements Role-Based Access Control (RBAC) to manage user roles and permissions in a Node.js application.

## Features
- User registration with role assignment (`user` or `admin`).
- Login functionality with JWT authentication.
- Middleware for role-based access control.
- Secure access to admin-only routes.
- User profile retrieval.

## Project Structure
```
Day20 - Role-Based Access Control (RBAC)/
├── app.js
├── routes/
│   ├── userRoutes.js
├── controllers/
│   ├── userController.js
├── middleware/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
├── utils/
│   ├── logger.js
├── logs/
│   └── application.log
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Day20-RBAC
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables in `.env`:
   ```env
   PORT=3000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_secret_key>
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### **1. Register a User**
- **URL:** `POST /api/users/register`
- **Request Body:**
  ```json
  {
    "username": "john_doe",
    "password": "securepassword123",
    "role": "admin"
  }
  ```

### **2. Login**
- **URL:** `POST /api/users/login`
- **Request Body:**
  ```json
  {
    "username": "john_doe",
    "password": "securepassword123"
  }
  ```

### **3. Get User Profile**
- **URL:** `GET /api/users/profile`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_token>"
  }
  ```

### **4. Access Admin-Only Route**
- **URL:** `GET /api/users/admin`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_token>"
  }
  ```

## Role-Based Access Control (RBAC)

- Users have roles (`user` or `admin`) assigned during registration.
- Admin-only routes are protected using `roleMiddleware`.

## Logs
- Logs are stored in the `logs/application.log` file using the Winston logger.

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Winston (Logging)

## License
This project is licensed under the (MIT License).
