// Heranças em interfaces.

interface IAnimal {
    name: string;
    type: string;
}

interface IBird extends IAnimal {
    wings: string;
}

// Heranças em tipos.

type TBird = IAnimal & {
    wings: number;
}

// exemplo de herança com 2 tipos.

type TPerson = {
    name: string;
    age: number;
}

type TEmployee = {
    job: string;
    budget: number;
}

type TWorker = TPerson & TEmployee;
const person: TWorker = { }