const express = require('express');
const todosController = require('../controllers/todosController');

const router = express.Router();

// GET all todos
router.get('/', todosController.getTodos);

// GET a specific todo by ID
router.get('/:id', todosController.getTodoById);

// POST a new todo
router.post('/', todosController.createTodo);

// PUT (update) a specific todo by ID
router.put('/:id', todosController.updateTodo);

// DELETE a specific todo by ID
router.delete('/:id', todosController.deleteTodo);

module.exports = router;
