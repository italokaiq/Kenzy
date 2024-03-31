interface IProduct {
  id: number;
  name: string;
  price: number;
  qty: number;
}

type TCreateProductData = Omit<IProduct, "qty">;

class CartServices {
  productList: IProduct[] = [];

  addProduct(newProduct: TCreateProductData) {
    const currentProductIndex = this.productList.findIndex(
      (product) => product.id === newProduct.id
    );

    if (currentProductIndex !== -1) {
      // Produto já existe no carrinho

      this.productList[currentProductIndex].qty += 1;
    } else {
      // adicionar novo produto ao carrinho

      const addingProduct = { ...newProduct, qty: 1 };
      this.productList.push(addingProduct);
    }
  }

  totalValue() {
    return this.productList.reduce((prev, product) => {
      return prev + product.price * product.qty;
    }, 0);
  }

  remove(removingId: number) {
    const currentProductIndex = this.productList.findIndex(
      (product) => product.id === removingId
    );

    if (currentProductIndex !== -1) {
      if (this.productList[currentProductIndex].qty > 1) {
        // Decrementar a quantidade do produto

        this.productList[currentProductIndex].qty -= 1;
      } else {
        // Remover o produto do carrinho se a quantidade for 1

        this.productList.splice(currentProductIndex, 1);
      }
    }
  }
}

const listaDeCompras = new CartServices();
listaDeCompras.addProduct({ id: 1, name: "Notebook", price: 4300 });
listaDeCompras.addProduct({ id: 1, name: "Notebook", price: 4300 });
listaDeCompras.addProduct({ id: 2, name: "Periféricos", price: 800 });
console.log(listaDeCompras.productList);
console.log(listaDeCompras.totalValue()); // 9400
listaDeCompras.remove(1);
console.log(listaDeCompras.productList);
console.log(listaDeCompras.totalValue()); // esperado 5100

/*
A expressão if (currentProductIndex !== -1) verifica se currentProductIndex é diferente de -1. No contexto do código fornecido, isso é usado para verificar se um produto foi encontrado no array productList.

Em JavaScript e muitas linguagens de programação, quando você tenta encontrar um elemento em um array usando indexOf ou findIndex e o elemento não é encontrado, o resultado é -1. Portanto, essa verificação (!== -1) é uma maneira comum de verificar se um determinado item está presente no array.

No caso específico do código fornecido, currentProductIndex é o índice do produto no array productList. Se currentProductIndex for diferente de -1, significa que o produto foi encontrado no array. Se for igual a -1, significa que o produto não está presente no array. A condição if (currentProductIndex !== -1) é usada para tomar decisões com base nesse resultado de busca no array.
*/