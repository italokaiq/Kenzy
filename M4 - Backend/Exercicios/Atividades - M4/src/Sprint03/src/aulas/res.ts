import { Request, Response } from "express";
import { app } from "../app";

// res 
// adicionar o "return";
// inserir o status adequado para rotas;

app.get("/", (req: Request, res: Response) => {
    return res.status(201).json("Rota de leitura!");    
});