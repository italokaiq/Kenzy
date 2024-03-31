import { Request, Response } from "express";
import { usersDatabase } from "../database/database";
import { UserService } from "../services/users.services";

export class UserControllers {
    getUsers(req: Request, res: Response): Response{
        const userService = new UserService();
        userService.getUsers();

        return res.status(200).json(usersDatabase);


        // return res.status(200).json(usersDatabase);
    }

    create(req: Request, res: Response): Response {
        const userService = new UserService();

        const response = userService.create(req.body);

        return res.status(201).json(response);

        // // const { name, email } = req.body;
        // const newUser: IUsers = { id: generateId(), name: req.body.name, email: req.body.email };

        // usersDatabase.push(newUser);

        // return res.status(201).json({user: newUser, message: "Usuário cadastrado com sucesso!"});
    }
}