import express, { json } from "express";
import { todoRouter } from "./routes/todo.routes";

export const app = express();

app.use(json());

// Endereço das rotas
app.use("/todos", todoRouter);