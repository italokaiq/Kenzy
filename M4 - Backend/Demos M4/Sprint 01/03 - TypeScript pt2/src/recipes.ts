interface ICategory {
    id: number;
    title: string;
    description: string
}

// interface existe para descrever um objeto.
interface IRecipe {
    id: number;
    title: string;
    ingredients: string[];
    steps: string[];
    category?: ICategory[];
}

// type descreve uma instância de qualquer tipo.

// exemplo:

//type TRecipe = {
//     id: number;
//     title: string;
//     ingredients: string[];
//     steps: string[];
// }

// Ou

type TRecipe = IRecipe;

const recipe: IRecipe = {
    id: 1,
    title: "Receita de bolo",
    ingredients: ["Trigo", "Ovos", "Chocolate"],
    steps: ["Passo 1", "Passo 2"],
    category: [{
        id: 1,
        title: "Categoria da receita",
        description: "Descrição da receita"
    }]
}