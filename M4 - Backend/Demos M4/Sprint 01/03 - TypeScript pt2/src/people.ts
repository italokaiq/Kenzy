interface IPet {
    id: number;
    name: string;
    species: string;
}

interface IPerson {
    id: number;
    name: string;
    age: number;
    pet?: IPet;
}

/*
interface IProgrammer {
    id: number;
    name: string;
    age: number;
    stack: string[];
}
*/

// herança: herdar chaves de outra interface através do "extends".
interface IProgrammer extends IPerson {
    stack: string[];
}

const programmer: IProgrammer = {
    id: 1,
    name: "Italo",
    age: 27,
    stack: ["Typescript", "Javascript"],
    pet: {
        id: 1,
        name: "Minerva",
        species: "Gato"
    }
}

// Ou

type TPerson = {
    id: number;
    name: string;
    age: number;   
}

type TProgrammer = TPerson & {
    stack: string[];
}

const programmer2:TProgrammer = {
    id: 1,
    name: "Italo",
    age: 27,
    stack: ["Typescript", "Javascript"]

}