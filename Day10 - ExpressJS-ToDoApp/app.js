const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const todosRoutes = require("./routes/todos");

const app = express();
const PORT = 3000;

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/api/todos", todosRoutes);

// Error handling
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
