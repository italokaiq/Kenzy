import "express-async-errors";
import helmet from "helmet";
import express, { json } from "express";
import { todoRouter } from "./routes/todo.router";
import { HandleError } from "./errors/handleError";

export const app = express();

app.use(helmet()); // protege a aplicação de diversas vulnearabilidades.

app.use(json());

app.use("/todos", todoRouter);

app.use(HandleError.execute);