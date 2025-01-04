const logger = require("../utils/logger");

// Example function to fetch users
const getUsers = (req, res) => {
  try {
    // Simulated database fetch
    const users = [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }];
    logger.info("Fetched all users successfully.");
    res.status(200).json(users);
  } catch (error) {
    logger.error(`Failed to fetch users: ${error.message}`);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Example function to create a user
const createUser = (req, res) => {
  try {
    const { name } = req.body;
    if (!name) throw new Error("Name is required");

    // Simulated user creation
    const newUser = { id: Date.now(), name };
    logger.info(`User created successfully: ${JSON.stringify(newUser)}`);
    res.status(201).json(newUser);
  } catch (error) {
    logger.error(`Failed to create user: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getUsers, createUser };
