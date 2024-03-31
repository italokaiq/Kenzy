import { IProduct } from "../interfaces/product.interfaces";

export const productsDataBase: IProduct[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
}