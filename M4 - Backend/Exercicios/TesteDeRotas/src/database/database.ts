import { IProducts } from "../interfaces/product.interface";

export const productList: IProducts[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
} 