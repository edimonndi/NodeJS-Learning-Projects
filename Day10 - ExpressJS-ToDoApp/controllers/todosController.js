let todos = [
    { id: 1, task: "Learn Node.js", completed: false },
    { id: 2, task: "Build To-Do API", completed: false },
  ];
  
  // Get all to-dos
  const getAllTodos = (req, res) => {
    res.json(todos);
  };
  
  // Get a single to-do by ID
  const getTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find((t) => t.id === id);
  
    if (!todo) return res.status(404).json({ message: "To-Do not found" });
    res.json(todo);
  };
  
  // Create a new to-do
  const createTodo = (req, res) => {
    const { task } = req.body;
  
    if (!task) return res.status(400).json({ message: "Task is required" });
  
    const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    const newTodo = { id: newId, task, completed: false };
  
    todos.push(newTodo);
    res.status(201).json(newTodo);
  };
  
  // Update a to-do
  const updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const { task, completed } = req.body;
  
    const todo = todos.find((t) => t.id === id);
    if (!todo) return res.status(404).json({ message: "To-Do not found" });
  
    if (task) todo.task = task;
    if (typeof completed === "boolean") todo.completed = completed;
  
    res.json(todo);
  };
  
  // Delete a to-do
  const deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex((t) => t.id === id);
  
    if (index === -1) return res.status(404).json({ message: "To-Do not found" });
  
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  };
  
  module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  };
  