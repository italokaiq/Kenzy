import { Request, Response } from "express";
import { TodoServices } from "../services/todo.services";

export class TodoControllers {
  get(req: Request, res: Response): Response {
    const todoService = new TodoServices();
    const response = todoService.get();

    return res.status(200).json(response);
  }

  create(req: Request, res: Response): Response {
    const todoService = new TodoServices();
    const response = todoService.create(req.body);

    return res.status(201).json(response);
  }

  update(req: Request, res: Response): Response {
    const todoService = new TodoServices();
    const { id } = req.params;
    const response = todoService.update(Number(id), req.body);

    return res.status(200).json(response);
  }

  delete(req: Request, res: Response) {
    const todoService = new TodoServices();
    const { id } = req.params;
    todoService.delete(Number(id));

    res.status(204).json();
  }
}