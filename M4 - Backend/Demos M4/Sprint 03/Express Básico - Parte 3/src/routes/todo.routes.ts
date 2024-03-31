import { Router } from "express";
import { TodoControllers } from "../controllers/todo.controllers";

export const todoRouter = Router();
const todoControllers = new TodoControllers();

todoRouter.get("/", todoControllers.get);
todoRouter.post("/", todoControllers.create);
todoRouter.patch("/:id", todoControllers.update);
todoRouter.delete("/:id", todoControllers.delete);