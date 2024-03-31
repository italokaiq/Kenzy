import { Router } from "express";
import { TodoControllers } from "../controllers/todo.controller";
import { IsTodoIdValid } from "../middlewares/isTodoIdValid.middleware";
import { BodyValidator } from "../middlewares/bodyValidator.middleware";
import {
  todoCreateBodySchema,
  todoUpdateBodySchema,
} from "../shemas/todo.schemas";

export const todoRouter = Router();

const todoController = new TodoControllers();

todoRouter.get("/", todoController.get);
todoRouter.get("/:id", IsTodoIdValid.execute, todoController.getOne);
todoRouter.post(
  "/",
  BodyValidator.execute(todoCreateBodySchema),
  todoController.create
);
todoRouter.patch(
  "/:id",
  BodyValidator.execute(todoUpdateBodySchema),
  IsTodoIdValid.execute,
  todoController.update
);
todoRouter.delete("/:id", IsTodoIdValid.execute, todoController.delete);