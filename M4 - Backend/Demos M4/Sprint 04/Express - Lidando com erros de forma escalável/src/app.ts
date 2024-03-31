import express, { json } from "express";
import { todoRouter } from "./routes/todo.router";
import { HandleErrors } from "./errors/handleErrors";
import "express-async-errors";

export const app = express();

app.use(json());

app.use("/todos", todoRouter);

app.use(HandleErrors.execute);