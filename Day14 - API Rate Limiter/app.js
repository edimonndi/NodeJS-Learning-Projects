const express = require('express');
const rateLimit = require('express-rate-limit'); // Import express-rate-limit
const todosController = require('./controllers/todosController');
const todosRouter = require('./routes/todos');

const app = express();
app.use(express.json());

// Define a rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    status: 429,
    error: 'Too many requests, please try again later.',
  },
});

// Apply rate limiting middleware globally
app.use(limiter);

// Routes
app.use('/api/todos', todosRouter);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js To-Do App with Rate Limiting!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
