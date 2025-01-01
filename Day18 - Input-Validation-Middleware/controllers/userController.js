const db = require("../config/db");

// Fetch all users
const getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch users" });
    }
    res.status(200).json(results);
  });
};

// Create a new user
const createUser = (req, res) => {
  const { name, email } = req.body;
  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(query, [name, email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to create user" });
    }
    res.status(201).json({ message: "User created", userId: result.insertId });
  });
};

module.exports = { getUsers, createUser };
