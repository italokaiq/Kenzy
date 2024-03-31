import { NextFunction, Request, Response } from "express";
import { todoList } from "../database/database";

export class IsTodoIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const todo = todoList.find((todo) => todo.id === Number(id));

    if (!todo) {
      return res.status(404).json({ error: "Todo not found." });
    }

    res.locals.todo = todo;

    next();
  }
}