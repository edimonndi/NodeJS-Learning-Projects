const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todosController");

// Define routes
router.get("/", todosController.getAllTodos);
router.post("/", todosController.createTodo);
router.put("/:id", todosController.updateTodo);
router.delete("/:id", todosController.deleteTodo);

module.exports = router;
