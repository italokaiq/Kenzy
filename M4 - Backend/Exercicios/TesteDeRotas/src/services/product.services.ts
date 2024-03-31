import { productList } from "../database/database";
import { TUpdateProductBody } from "../interfaces/product.interface";

export class ProductService {
    getProduct(){
        return productList;
    }

    getOneProduct(currentId: number, data: TUpdateProductBody){

    }
}