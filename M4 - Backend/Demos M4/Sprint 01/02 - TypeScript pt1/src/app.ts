console.log("Olá mundo!");

const firstName: string = "italo";
const age: number = 27;
const isATecher: boolean = false;

function sayMyName(name: string){
    console.log(name);
}
sayMyName(firstName);

function sum (a: number, b: number): number{
    return a + b;
}

console.log(sum(8, 2));
