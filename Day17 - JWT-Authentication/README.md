
# Day 17 - JWT Authentication

This project adds authentication using JSON Web Tokens (JWT) to a Node.js application. It includes protected routes that can only be accessed with a valid token.

---

## Features

- User authentication with JWT
- Environment configuration using `.env`
- Protected routes accessible only with a valid JWT token
- Secure password hashing with `bcrypt`
- Comprehensive documentation to set up and run the app

---

## Requirements

- Node.js installed
- MongoDB installed and running (if applicable for storing users)
- Postman or any API testing tool (for testing endpoints)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/edimonndi/NodeJS-Learning-Projects
   ```

2. Navigate to the project directory:
   ```bash
   cd jwt-authentication
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=3000
   JWT_SECRET=your_jwt_secret
   MONGO_URI=mongodb://localhost:27017/todoApp
   ```

5. Start the application:
   ```bash
   npm start
   ```

---

## API Endpoints

### **Authentication**

1. **Register a new user**
   - **POST** `/register`
   - **Body:**
     ```json
     {
       "username": "exampleuser",
       "password": "examplepassword"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "User registered successfully!"
     }
     ```

2. **Login and get a token**
   - **POST** `/login`
   - **Body:**
     ```json
     {
       "username": "exampleuser",
       "password": "examplepassword"
     }
     ```
   - **Response:**
     ```json
     {
       "token": "your_jwt_token"
     }
     ```

### **Protected Route**

3. **Access a protected route**
   - **GET** `/protected`
   - **Headers:**
     - `Authorization: Bearer your_jwt_token`
   - **Response:**
     ```json
     {
       "message": "This is a protected route.",
       "user": {
         "id": "12345",
         "username": "exampleuser"
       }
     }
     ```

---

## Testing with Postman

1. Use the `/register` route to create a new user.
2. Use the `/login` route to get a JWT token.
3. Use the token in the `Authorization` header to access protected routes.

---

## Dependencies

- `express`: Web framework for Node.js
- `jsonwebtoken`: Library to create and verify JWTs
- `bcrypt`: Password hashing
- `dotenv`: Load environment variables
- `mongoose`: MongoDB object modeling

---

## License

This project is open-source and available under the [MIT License](LICENSE).
