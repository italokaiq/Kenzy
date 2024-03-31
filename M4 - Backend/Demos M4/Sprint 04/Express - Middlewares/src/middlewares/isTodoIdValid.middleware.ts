import { NextFunction, Request, Response } from "express";
import { todoList } from "../database/database";

// export class IsTodoIdValid {
//   static execute(req: Request, res: Response, next: NextFunction) {
//     const { id } = req.params;
//     const isTodoExisting = todoList.some((todo) => todo.id === Number(id));
//     if (!isTodoExisting) {
//       return res.status(404).json({ error: "Todo not found." });
//     }

//     next();
//   }
// }

// parte modificada para apresentar apenas uma busca na biblioteca
export class IsTodoIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const existingTodo = todoList.find((todo) => todo.id === Number(id));
    if (!existingTodo) {
      return res.status(404).json({ error: "Todo not found." });
    }

    res.locals.todo = existingTodo;

    next();
  }
}