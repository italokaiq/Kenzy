import express, { json } from "express";
import { todoRoutes } from "./routes/todo.routes";

// express permite a criação de rotas
// oferece/levanta o servidor local

// exemplo:
// app.get("/hello", (req, res) => {   //req: requisição, res: resposta;
//     // return res.send("Olá mundo!"); // Resposta é o que nós desejamos estabelecer como retorno dessa rota

//     return res.status(200).json({ message: "Olá mundo!" });
// });

// Serviços - Regras de negocio sem influencia de Framework.
export const app = express();

app.use(json());

// Endereço das rotas
app.use("/todos", todoRoutes)