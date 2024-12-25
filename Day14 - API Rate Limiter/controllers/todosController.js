const todos = []; // Temporary array to store To-Do items

// Get all todos
exports.getTodos = (req, res) => {
  res.json(todos);
};

// Get a single todo by ID
exports.getTodoById = (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(todo);
};

// Create a new todo
exports.createTodo = (req, res) => {
  const { title, completed } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    completed: completed || false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// Update a todo by ID
exports.updateTodo = (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const { title, completed } = req.body;
  if (title) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
};

// Delete a todo by ID
exports.deleteTodo = (req, res) => {
  const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todos.splice(todoIndex, 1);
  res.status(204).send(); // No content
};
