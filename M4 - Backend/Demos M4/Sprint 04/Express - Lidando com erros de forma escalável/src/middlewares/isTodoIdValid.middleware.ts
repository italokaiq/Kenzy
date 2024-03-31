import { NextFunction, Request, Response } from "express";
import { todoList } from "../database/database";
import { AppError } from "../errors/AppError";

export class IsTodoIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const existingTodo = todoList.find((todo) => todo.id === Number(id));

    if (!existingTodo) {
      throw new AppError("Todo not found.", 404);
    }

    res.locals.todo = existingTodo;

    next();
  }
}