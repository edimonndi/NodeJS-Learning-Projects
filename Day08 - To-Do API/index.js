const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory "database"
let todos = [
  { id: 1, task: "Learn Node.js", completed: false },
  { id: 2, task: "Build To-Do API", completed: false },
];

// Routes

// Get all to-do items
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Get a single to-do by ID
app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) return res.status(404).json({ message: "To-Do not found" });
  res.json(todo);
});

// Add a new to-do
app.post("/api/todos", (req, res) => {
  const newTask = req.body.task;

  if (!newTask) {
    return res.status(400).json({ error: "Task is required" });
  }

  // Find the highest ID and increment it to generate a new ID
  const newId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

  const newTodo = { id: newId, task: newTask, completed: false };
  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// Update a to-do (mark as completed or update task)
app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) return res.status(404).json({ message: "To-Do not found" });

  if (task) todo.task = task;
  if (typeof completed === "boolean") todo.completed = completed;

  res.json(todo);
});

// Delete a to-do
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));

  if (index === -1) return res.status(404).json({ message: "To-Do not found" });

  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/api/todos`);
});
