import express, { json } from "express";
import { TodoControllers } from "./controllers/todo.controller";

const app = express();

app.use(json());

const todoService = new TodoControllers();

app.get("/todo", todoService.get);
app.post("/todo", todoService.create);
app.delete("/todo/:id", todoService.delete);

app.listen(3000, () => {
  console.log(`API sucessfully started!`);
});