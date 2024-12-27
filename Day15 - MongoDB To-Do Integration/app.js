const express = require("express");
const mongoose = require("mongoose");
const todosRoutes = require("./routes/todos");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
const MONGO_URI = "mongodb://localhost:27017/todoApp";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/todos", todosRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
