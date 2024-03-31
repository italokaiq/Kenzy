import { Request, Response } from "express";
import { TodoServices } from "../services/todo.services";
import { ITodo } from "../interfaces/todo.interface";

export class TodoControllers {
  // Busca normal
  // get(req: Request, res: Response): Response {
  //   const todoServices = new TodoServices();
  //   const response = todoServices.get();

  //   return res.status(200).json(response);
  // }

  // Com o termo de busca
  get(req: Request, res: Response): Response {
    const todoServices = new TodoServices();
    const { search } = req.query;
    const response = todoServices.get(search as string);

    return res.status(200).json(response);
  }

  getOne(req: Request, res: Response): Response {
    const todoServices = new TodoServices();
    const { todo } = res.locals; // aqui é repassado o res.locals do middleware
    const response = todoServices.getOne(todo);

    return res.status(200).json(response);
  }

  create(req: Request, res: Response): Response {
    const todoServices = new TodoServices();
    const response = todoServices.create(req.body);

    return res.status(201).json(response);
  }

  update(req: Request, res: Response): Response {
    const todoServices = new TodoServices();
    const { id } = req.params;
    const response = todoServices.update(Number(id), req.body);

    return res.status(200).json(response);
  }

  // Adptação do res.locals
  // update(req: Request, res: Response): Response {
  //   const todoServices = new TodoServices();
  //   const { todo } = res.locals; // Definindo o tipo de locals
  //   const response = todoServices.update(req.body, todo); // Passando 'todo' diretamente como parâmetro

  //   return res.status(200).json(response);
  // }

  delete(req: Request, res: Response) {
    const todoServices = new TodoServices();
    const { id } = req.params;
    todoServices.delete(Number(id));

    res.status(204).json();
  }
}