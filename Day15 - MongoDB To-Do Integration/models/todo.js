const mongoose = require("mongoose");

// Define the schema for a todo
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

// Create the model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
