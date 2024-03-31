import { Request, Response, Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";

export const productsRouter = Router();

const productsControllers = new ProductsControllers();

productsRouter.get("/", productsControllers.getProducts);

productsRouter.post("/", productsControllers.create);

productsRouter.patch("/", (req: Request, res: Response) => {
    return res.status(200).json("Rota de Atualização Parcial");
});

productsRouter.put("/", (req: Request, res: Response) => {
    return res.status(200).json("Rota de Atualização!");
});

productsRouter.delete("/:id", productsControllers.deleteProduct);