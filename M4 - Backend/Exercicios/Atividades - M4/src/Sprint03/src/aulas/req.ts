import { Request, Response } from "express";
import { app } from "../app";

// req - Requisição

app.get("/", (req: Request, res: Response) => {
    console.log(req.body); // corpo da requisição
});

app.get("/:id/:name", (req: Request, res: Response) => {
    console.log(req.params); // parâmetros de url - url/param
});
app.get("/", (req: Request, res: Response) => {
    console.log(req.query); // parâmetros de busca - url?param=value
});

app.get("/", (req: Request, res: Response) => {
   console.log(req.headers); // configurações e credenciais de acesso
    
});