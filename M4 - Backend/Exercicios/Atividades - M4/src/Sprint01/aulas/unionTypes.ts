// Union - variação de tipagem (string ou número/ número ou boleano...)

let age: number | string;

age = 28;
age = "28";

// exemplo

const sum3 = (num1:number | string, num2:number | string) => {
    return Number(num1) + Number(num2);
}