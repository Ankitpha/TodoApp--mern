import express from "express";
import { updateTodoText } from "../controllers/todoController.js";
import {
  getTodos,
  createTodo,
  deleteTodo,
  toggleComplete,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", toggleComplete);
router.put("/edit/:id", updateTodoText);

export default router;
