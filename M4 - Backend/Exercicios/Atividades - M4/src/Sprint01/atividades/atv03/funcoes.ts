import { IProduct } from "./interface";

const productList: IProduct[] = [];

const addProduct = (product: IProduct) => {
    productList.push(product);

    return { product, message: "O produto foi adicionado com sucesso!"}
}

const getProduct = () => {
    return productList;
}

/*
Execute a função de criação duas vezes. Adicione os respectivos produtos:
Geladeira - 2400 - identificador: 1
Cooktop - 1200 - identificador: 2
*/

const product1 = addProduct({id: 1, name: "Geladeira", price: 2400});
console.log(product1);

const product2 = addProduct({id: 2, name: "Cooktop", price: 1200});  
console.log(product2);

console.table(getProduct());
;