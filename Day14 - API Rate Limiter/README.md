
# Day 14: API Rate Limiter for To-Do App

This project adds **API rate limiting** functionality to the existing To-Do App. The purpose is to ensure fair usage of the API by restricting the number of requests a user can make within a specific time frame.

---

## Features
- **CRUD API** for managing To-Do items:
  - Create, Read, Update, and Delete To-Do items.
- **Rate Limiting**:
  - Limits requests to prevent abuse.
  - Example: Maximum of 10 requests per minute per user.
- Built using **Node.js** and **Express**.

---

## Endpoints

### Base URL: `/api/todos`

| HTTP Method | Endpoint       | Description                     |
|-------------|----------------|---------------------------------|
| `GET`       | `/`            | Fetch all to-dos               |
| `GET`       | `/:id`         | Fetch a single to-do by ID      |
| `POST`      | `/`            | Create a new to-do              |
| `PUT`       | `/:id`         | Update a to-do by ID            |
| `DELETE`    | `/:id`         | Delete a to-do by ID            |

---

### Request Examples

#### 1. Fetch All Todos
**GET** `/api/todos`

_Response_:
```json
[
  {
    "id": 1,
    "title": "Buy groceries",
    "completed": false
  }
]
```

#### 2. Create a New Todo
**POST** `/api/todos`

_Request Body_:
```json
{
  "title": "Learn Node.js",
  "completed": false
}
```

_Response_:
```json
{
  "id": 2,
  "title": "Learn Node.js",
  "completed": false
}
```

---

## Rate Limiting

The API uses the `express-rate-limit` package to enforce rate limits. 

- **Rate Limit Policy**: 
  - Maximum 10 requests per minute.
  - Returns a `429 Too Many Requests` response when the limit is exceeded.

---

## Installation and Usage

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/your-repository.git
cd Day14-API-Rate-Limiter
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
npm start
```

The app will run on `http://localhost:3000` by default.

---

## Project Structure

```
Day14-API-Rate-Limiter/
│
├── controllers/
│   └── todosController.js     # Handles CRUD operations
│
├── routes/
│   └── todos.js               # Defines API routes
│
├── app.js                     # Main application file
│
├── package.json               # Dependencies and scripts
│
└── README.md                  # Project documentation
```

---

## Technologies Used
- **Node.js**
- **Express**
- **Express-Rate-Limit**

---

## License
This project is open-source and available under the [MIT License](LICENSE).
