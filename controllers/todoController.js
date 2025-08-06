import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const { text } = req.body;
  const newTodo = new Todo({ text });
  await newTodo.save();
  res.status(201).json(newTodo);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Deleted" });
};

export const toggleComplete = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  todo.isCompleted = !todo.isCompleted;
  await todo.save();
  res.json(todo);
};

export const updateTodoText = async (req, res) => {
  try {
    const { text } = req.body;
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todo.text = text;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};