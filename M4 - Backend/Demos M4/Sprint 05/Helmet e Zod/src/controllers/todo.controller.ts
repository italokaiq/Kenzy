import { Request, Response } from "express";
import { TodoService } from "../services/todo.service";

export class TodoControllers {
  get(req: Request, res: Response): Response {
    const todoService = new TodoService();
    const response = todoService.get();

    return res.status(200).json(response);
  }

  getOne(req: Request, res: Response): Response {
    const todoService = new TodoService();
    const { todo } = res.locals;
    const response = todoService.getOne(todo);

    return res.status(200).json(response);
  }

  create(req: Request, res: Response): Response {
    const todoService = new TodoService();
    const response = todoService.create(req.body);

    return res.status(201).json(response);
  }

  update(req: Request, res: Response): Response {
    const todoService = new TodoService();
    const { todo } = res.locals;
    const response = todoService.update(todo, req.body);

    return res.status(200).json(response);
  }

  delete(req: Request, res: Response): Response {
    const todoService = new TodoService();
    const { id } = req.params;
    todoService.delete(Number(id));

    return res.status(204).json();
  }
}