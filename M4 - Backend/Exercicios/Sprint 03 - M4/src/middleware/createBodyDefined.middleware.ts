import { NextFunction, Request, Response } from "express";

export class CreateBodyDefined{
    static execute(req: Request, res: Response, next: NextFunction){
        if (!req.body.title) {
            return res.status(400).json({ error: "The parameter 'title' must be defined"});
        }

        if (!req.body.content) {
            return res.status(400).json({ error: "The parameter 'content' must be defined"});
        }

        // Se ambos os parâmetros estiverem definidos, chame next() para permitir que a execução continue.
        next();
    }
}