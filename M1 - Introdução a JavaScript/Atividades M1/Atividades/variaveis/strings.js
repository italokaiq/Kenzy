// 💪 Atividade: Trabalhando com Strings

// Exercício 1
// Crie um programa que concatene dois nomes e retorne uma frase de saudação.
// Entrada: nome1 = "João", nome2 = "Silva" Saída: "Olá João Silva!".

let nome1 = "João";
let nome2 = "Silva";

console.log(`Olá ${nome1} ${nome2}`);

// Exercício 2
// Crie um programa que adicione uma string ao final de outra string e retorne a string resultante.
// Entrada: string1 = "hello", string2 = "world" Saída: "helloworld".

let string1 = "hello";
let string2 = "world";
let strings = string1 + string2;

console.log(strings);

// Exercício 3
// Crie um programa que receba uma string em formato de número decimal e retorne o número inteiro equivalente.
// Entrada: "12.5" Saída: 12

let stringDec = "3.14";

console.log(parseInt(stringDec));

// Exercício 4
// Crie um programa que converta uma string em formato de número inteiro para um número inteiro.
// Entrada: "12" Saída: 12

let stringNumber = "14";
const converterString = parseInt(stringNumber);

console.log(converterString);

// Exercício 5
// Crie um programa que converta duas strings em formato de número inteiro para um número inteiro, faça uma 
// soma desses números e apresente o resultado
// Entrada 1: "12" Entrada 2: "3" Saída: 15

let number1 = "12";
let number2 = "3";

const sum1 = Number(number1 + number2);
// ou
const sum2 = parseInt(number1 + number2);