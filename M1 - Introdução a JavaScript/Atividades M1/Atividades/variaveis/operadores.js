// 💪 Atividade - Praticando Operadores

// Exercício 1
// Declare uma variável chamada num1 e atribua a ela o valor 5. Em seguida, declare uma variável chamada num2 e 
// atribua a ela o valor 10. Some as duas variáveis e imprima o resultado no console.

let num1 = 5;
let num2 = 10;
const sum = num1 + num2;

console.log(sum);

// Exercício 2
// Declare uma variável chamada pi e atribua a ela o valor de 3.14. Em seguida, declare uma variável chamada raio e 
// atribua a ela o valor 5. Calcule o comprimento da circunferência com base no raio e imprima o resultado no console. 
// (dica: multiplique o raio pelo valor de pi e pelo número dois)

const pi = 3.14159;
let radius = 5;
const circleRadius = 2 * radius * pi;

console.log(circleRadius);

// Exercício 3
// Declare uma variável chamada temperatura e atribua a ela o valor 30. Em seguida, converta a temperatura de Celsius 
// para Fahrenheit e imprima o resultado no console. (dica: para converter de Celsius para Fahrenheit, basta multiplicar 
// a temperatura por nove, após isso dividir o valor por cinco e somar trinta e dois).

let tempCelsius = 30;
let tempFahrenheit = (tempCelsius * 9) / 5 + 32;

console.log(tempFahrenheit);

// Exercício 4
// Declare uma variável chamada nota1 e atribua a ela o valor 7. Em seguida, declare uma variável chamada nota2 e 
// atribua a ela o valor 9. Calcule a média das duas notas e imprima o resultado no console.

let nota1 = 7;
let nota2 = 9;
const media = (nota1 + nota2) / 2;

console.log(media);

// Exercício 5
// Declare uma variável chamada largura e atribua a ela o valor 10. Em seguida, declare uma variável chamada comprimento 
// e atribua a ela o valor 20. Calcule a área do retângulo e imprima o resultado no console.

let width = 10;
let length = 20;
const areaRectangle = width * length;

console.log(areaRectangle);

// Exercício 6
// Declare uma variável chamada salarioBruto e atribua a ela o valor 5000. Em seguida, calcule e imprima o salário líquido, 
// considerando um desconto de 10% para impostos.

let salarioBruto = 5000;
const salarioLiquido = salarioBruto * 0.1;

console.log(salarioLiquido);

// Exercício 7
// Declare uma variável chamada horasTrabalhadas e atribua a ela o valor 40. Em seguida, declare uma variável chamada valorHora 
// e atribua a ela o valor 50. Calcule o salário bruto de uma pessoa e imprima o resultado no console.

let horasTrabalhadas = 40;
let valorHora = 50;
const salario = horasTrabalhadas * valorHora;

console.log(salario);