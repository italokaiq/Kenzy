import { Router } from "express";
import { TodoController } from "../controllers/todo.controller";
import { IsCreateBodyDefined } from "../middlewares/isCreateBodyDefined.middleware";
import { IsCreateBodyDataTypeValid } from "../middlewares/isCreateBodyDataTypeValid.middleware";
import { IsTodoIdValid } from "../middlewares/isTodoIdValid.middleware";

export const todoRouter = Router();

const todoController = new TodoController();

todoRouter.get("/", todoController.get);
todoRouter.get("/:id", IsTodoIdValid.execute, todoController.getOne);
todoRouter.post(
  "/",
  IsCreateBodyDefined.execute,
  IsCreateBodyDataTypeValid.execute,
  todoController.create
);
todoRouter.patch(
  "/:id",
  IsTodoIdValid.execute,
  IsCreateBodyDataTypeValid.execute,
  todoController.update
);
todoRouter.delete("/:id", IsTodoIdValid.execute, todoController.delete);