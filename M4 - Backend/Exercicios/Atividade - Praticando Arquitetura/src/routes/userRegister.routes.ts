import { Router } from "express";
import { UserControllers } from "../controllers/users.controllers";
import { IsUserEmailUnique } from "../middlewares/isUserEmailUnique.middleware";

export const registerRouter = Router();

const users = new UserControllers();

registerRouter.get("/");

registerRouter.post("/", IsUserEmailUnique.execute, users.create);
