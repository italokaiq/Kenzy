import { IProduct, IProductList } from "./interfaces";

class ProductList implements IProductList {
    private productList: IProduct[] = [];

    id: number = 1;

    createProduct(data: { name: string; price: number; }): IProduct {
        const newProducts: IProduct = {
            id: this.id,
            name: data.name,
            price: data.price,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        this.productList.push(newProducts);
        this.id++;

        return newProducts;
    }

    getProducts(): IProduct[] {
        return this.productList;
    }

    getOneProduct(id: number): IProduct | undefined {
        return this.productList.find((product) => product.id === id);
    }

    updateProduct(id: number, data: { name?: string; price?: number; }): IProduct {
        const index = this.productList.findIndex((product) => product.id === id);

        if (index) {
            const updateProductIndex = { ...this.productList[index], ...data, updateAt: new Date() };
            this.productList[index] = updateProductIndex;

            return updateProductIndex;
        } else {
            throw new Error("Produto não encontrado");
        }
    }
    deleteProduct(id: number): { message: string; } {
        const currentProduct = this.productList.find((product) => product.id === id);

        if (currentProduct) {
            const index = this.productList.findIndex((product) => product.id === id);
            this.productList.splice(index, 1);

            return { message: "Qualquer coisa aqui" };
        } else {
            return { message: "Qualquer coisa de novo" }
        }
    }
};

const productList = new ProductList(); // export
