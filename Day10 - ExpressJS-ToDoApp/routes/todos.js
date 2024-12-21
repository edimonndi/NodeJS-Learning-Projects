const express = require("express");
const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require("../controllers/todosController");

const router = express.Router();

router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
