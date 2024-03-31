import { Request, Response } from "express";
import { IProduct } from "../interfaces/product.interfaces";
import { generateId, productsDataBase } from "../database/database";

export class ProductsControllers {
    getProducts(req: Request, res: Response): Response {
        return res.status(200).json(productsDataBase);
    }

    createProduct(req: Request, res: Response): Response {
        const newProduct: IProduct = { id: generateId(), name: req.body.name, price: req.body.price }

        productsDataBase.push(newProduct);

        return res.status(201).json(newProduct);
    }

    deleteProduct(req: Request, res: Response): Response {
        const index = productsDataBase.findIndex((product) => product.id === Number(req.params.id));

        productsDataBase.splice(index, 1);

        return res.status(204).json();
    }
}