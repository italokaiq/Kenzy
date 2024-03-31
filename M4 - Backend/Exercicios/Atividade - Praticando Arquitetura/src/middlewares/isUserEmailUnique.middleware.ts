import { NextFunction, Request, Response } from "express";
import { usersDatabase } from "../database/database";

export class IsUserEmailUnique {
    static execute(req: Request, res: Response, next: NextFunction){
        const emailUnique = usersDatabase.some(user => user.email === req.body.email)

        if (emailUnique) {
            return res.status(409).json({ message: "Email already registered!" })
        }

        next();
    }
}