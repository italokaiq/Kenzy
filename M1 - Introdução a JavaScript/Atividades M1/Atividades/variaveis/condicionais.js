// 💪 Atividade: Condicionais na Prática

// Exercício 1
// Faça um algoritmo declarando as variáveis A, B, C iniciando-as com os respectivos valores 10, 20 e 30, 
// e imprima na tela se a soma de A + B é menor que C.



function sum() {
    let a = 10;
    let b = 20;
    let c = 30;

    let soma = a + b;

    if (soma < c) {
        return soma;
    } else {
        return "A soma de a + b é maior ou igual a c";
    };
}

// Exercício 2
// Faça um algoritmo declarando uma variável com um valor numérico qualquer e informe na tela se esse numero 
// é par ou ímpar.

let isPar = 0;

if (isPar % 2 === 0) {
    console.log(`${isPar} é par!`);
} else {
    console.log(`${isPar} é impar!`);
}

// Exercício 3
// Declare duas variáveis que armazenam valores boleanos(lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.

let boolean1 = true;
let boolean2 = false;

let ambosVerdadeiros = boolean1 && boolean2;
let ambosFalsos = !boolean1 && !boolean2;

console.log("Ambos verdadeiros:", ambosVerdadeiros);
console.log("Ambos falsos:", ambosFalsos);

// ou

if (boolean1 !== boolean2) {
    console.log("Os valores são diferentes");
}

if (boolean1 && boolean2) {
    console.log("Ambos são verdadeiros!");
} else {
    console.log("Ambos são falsos");
}

// Exercício 4
// Declare três variáveis que armazenam valores numéricos inteiros e diferentes e mostre-os em ordem decrescente.

let num1 = 5;
let num2 = 87;
let num3 = 14;

let numeros = [num1, num2, num3];

numeros.sort((a, b) => a - b);

console.log(numeros);

// Exercício 5
// Escreva um algoritmo que receba dois números. ⁠Alerte em tela qual o maior valor recebido.

// Dica: Para alertar você pode utilizar a função alert(), ou se preferir, mostre no console através da função console.log()

const higherNumber = (num1, num2) => {

    num1 = parseFloat(num1).toFixed(2);
    num2 = parseFloat(num2).toFixed(2);


    if (num1 > num2) {
      return `${num1} é maior que ${num2}!`;
    } else {
      return `${num1} é menor que ${num2}!`;
    }
  };
  
  console.log(higherNumber(6, 5));
  