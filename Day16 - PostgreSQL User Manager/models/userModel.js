const pool = require('../config/db');

// Create Users Table
const createTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
    await pool.query(query);
};

createTable();

// User CRUD Operations
const getAllUsers = async () => {
    const result = await pool.query('SELECT * FROM users;');
    return result.rows;
};

const getUserById = async (id) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1;', [id]);
    return result.rows[0];
};

const createUser = async (name, email) => {
    const result = await pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;',
        [name, email]
    );
    return result.rows[0];
};

const updateUser = async (id, name, email) => {
    const result = await pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *;',
        [name, email, id]
    );
    return result.rows[0];
};

const deleteUser = async (id) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *;', [id]);
    return result.rows[0];
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
