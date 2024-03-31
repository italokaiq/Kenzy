import { Request, Response, Router } from "express";

export const productsRouter = Router();  

productsRouter.get("/", (req: Request, res: Response) => {
    return res.json("Rota de leitura!");
});

productsRouter.post("/", (req: Request, res: Response) => {
    return res.status(201).json("Rota de criação!");
});

productsRouter.put("/", (req: Request, res: Response) => {
    return res.json("Rota de atualização")
});

productsRouter.delete("/", (req: Request, res: Response) => {
    return res.json("Rota de exclusão!");
});