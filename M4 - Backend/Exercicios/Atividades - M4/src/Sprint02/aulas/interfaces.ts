interface IProductList {
    productList: string[];
    getProducts(): string[];
    addProduct(product: string): void; 
    removeProduct(index: number): void;
}

//exemplo

// class ProductList implements IProductList {
//     productList: string[];

//     getProducts(): string[] {
        
//     }

//     addProduct(product: string): void {
        
//     }

//     removeProduct(index: number): void {
        
//     }
// }
