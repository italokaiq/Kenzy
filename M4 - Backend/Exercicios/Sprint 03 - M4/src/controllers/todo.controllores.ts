//controllers - Integração com o Framework.

import { Request, Response } from "express";
import { TodoServices } from "../services/todo.services";

export class TodoControllores {
    getTodos(req: Request, res: Response) {
        const { search } = req.query;

        const todoService = new TodoServices();

        const response = todoService.getTodos(search as string);

        return res.status(200).json(response);
    }

    getOneTodo(req: Request, res: Response) {
        const { todo } = res.locals;

        const todoService = new TodoServices();

        const response = todoService.getOneTodo(todo);

        return res.status(200).json(response);
    }

    create(req: Request, res: Response) {
        const todoService = new TodoServices();

        const response = todoService.create(req.body);

        return res.status(201).json(response);
    }

    update(req: Request, res: Response) {
        const todoService = new TodoServices();
        const { todoId } = req.params;

        const response = todoService.update(Number(todoId), req.body);

        return res.status(200).json(response);
    }

    delete(req: Request, res: Response) {
        const todoService = new TodoServices();

        const { todoId } = req.params;

        todoService.delete(Number(todoId));

        return res.status(204).json();
    }
}