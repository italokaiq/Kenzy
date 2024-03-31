import { Router } from "express";
import { TodoControllers } from "../controllers/todo.controllers";
import { IsCreateBodyDefined } from "../middlewares/isCreateBodyDefined.middleware";
import { IsCreateBodyDataTypeValid } from "../middlewares/isCreateBodyDataTypeValid.middleware";
import { IsTodoIdValid } from "../middlewares/isTodoIdValid.middleware";

export const todoRouter = Router();

const todoControllers = new TodoControllers();

todoRouter.get("/", todoControllers.get);
todoRouter.get("/:id", IsTodoIdValid.execute, todoControllers.getOne)
todoRouter.post(
  "/",  
  IsCreateBodyDefined.execute,
  IsCreateBodyDataTypeValid.execute,
  todoControllers.create
);
todoRouter.patch(
  "/:id",
  IsTodoIdValid.execute,
  IsCreateBodyDataTypeValid.execute,
  todoControllers.update
);
todoRouter.delete("/:id", IsTodoIdValid.execute, todoControllers.delete);