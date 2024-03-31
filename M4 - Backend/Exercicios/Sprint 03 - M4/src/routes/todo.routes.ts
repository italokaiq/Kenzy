import { Router } from "express";
import { TodoControllores } from "../controllers/todo.controllores";
import { CreateBodyDefined } from "../middleware/createBodyDefined.middleware";
import { CreateBodyDataTypeValid } from "../middleware/createBodyDataTypeValid.middleware";
import { TodoIdValid } from "../middleware/todoIdValid.middleware";

export const todoRoutes = Router();

const todoControllers = new TodoControllores();

todoRoutes.get("/", todoControllers.getTodos);

todoRoutes.get("/:todoId", TodoIdValid.execute, todoControllers.getOneTodo);

// requisição  é todo o conjunto  de dados fornecidos externamento para uma requisição.
// é tudo que vem de fora. (dados que vem de fora).
// req.body, req.params, req.headers, req.query
todoRoutes.post("/", CreateBodyDefined.execute, CreateBodyDataTypeValid.execute, todoControllers.create);

todoRoutes.patch("/:todoId", TodoIdValid.execute, todoControllers.update);

todoRoutes.delete("/:todoId", TodoIdValid.execute, todoControllers.delete);