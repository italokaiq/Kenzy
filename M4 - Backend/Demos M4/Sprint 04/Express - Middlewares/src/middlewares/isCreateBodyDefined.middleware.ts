import { NextFunction, Request, Response } from "express";

export class IsCreateBodyDefined {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (!req.body.title || !req.body.content) {
      return res.status(400).json({ message: "Body parameter not defined" });
    }

    next();
  }
}
