
# PostgreSQL User Manager

A simple Node.js-based RESTful API for managing users, integrated with PostgreSQL.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete users.
- **PostgreSQL Integration**: Data is stored in a PostgreSQL database.
- **Environment Configuration**: Easily configurable via `.env` file.

## Prerequisites

1. **Node.js** (v14 or above)
2. **PostgreSQL** (Ensure it is installed and running)
3. **npm** (Node Package Manager)
4. **pgAdmin** (Optional for managing the database graphically)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd "Day16 - PostgreSQL User Manager"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the project root with the following content:

```env
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=user_manager
DB_PASSWORD=your_postgres_password
DB_PORT=5432
PORT=3000
```

Replace `your_postgres_username` and `your_postgres_password` with your PostgreSQL credentials.

## Run the Application

1. Start the server:
   ```bash
   node index.js
   ```
2. The API will run at `http://localhost:3000`.

## Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | /api/users       | Get all users            |
| GET    | /api/users/:id   | Get a user by ID         |
| POST   | /api/users       | Add a new user           |
| PUT    | /api/users/:id   | Update an existing user  |
| DELETE | /api/users/:id   | Delete a user            |

## Usage

1. **Create a User**:
   Send a POST request to `/api/users` with JSON body:
   ```json
   {
     "name": "John Doe",
     "email": "john@example.com"
   }
   ```

2. **View Users**:
   Send a GET request to `/api/users`.

## Notes

- If you encounter errors, ensure PostgreSQL is running and properly configured.
- Install `express` manually if not already installed:
  ```bash
  npm install express
  ```

## License

MIT
