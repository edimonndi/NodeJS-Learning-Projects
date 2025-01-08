
# Day21 - API Documentation

This project demonstrates how to document APIs using Swagger.

## Features
- **User Registration** API documented with Swagger.
- Interactive Swagger UI available at `/api-docs`.

## Project Structure
```
Day21 - API Documentation/
├── app.js
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── utils/
│   └── logger.js
├── docs/
│   └── swagger.json
├── package.json
├── README.md
└── .env
```

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open Swagger UI in your browser:
   ```
   http://localhost:3000/api-docs
   ```

## API Endpoints
### POST /api/users/register
Registers a new user.

- **Request Body**:
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **Responses**:
  - 201: User registered successfully.
  - 400: Bad request.

## Tools Used
- **Express.js** for building the API.
- **Swagger UI** for API documentation.
- **Winston** for logging.

---
## License
This project is licensed under the (MIT License).