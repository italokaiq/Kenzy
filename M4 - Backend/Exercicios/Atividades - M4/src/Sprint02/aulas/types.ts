// type - Umas estância de tipo que aceita qualquer tipagem existente

// exemplos

// type exemplo1 = string;

// type exemplo2 = string | number;

// Idéia de interface

interface IProduct {
    id: number;
    name: string;
    price: number;
    categories: string[];

}

type Product = IProduct | null;

type Modules = "M1" | "M2" | "M3" | "M4" | "M5";

const courseModule: Modules = "M5";