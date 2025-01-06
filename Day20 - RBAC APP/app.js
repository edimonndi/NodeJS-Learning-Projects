const express = require("express");
const mongoose = require("./config/db");
const logger = require("./utils/logger");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
