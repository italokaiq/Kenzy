// S5-06 | 💪 Atividade: Funções com Parâmetros

// Exercício 1
// Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.

function characterValue(value) {
    if (value >= 1) {
        console.log('P');
    } else {
        console.log('N');
    }
}

characterValue(0);

//   Exercício 2
// Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.

function quantidadeDeDigitos(numero){
    return numero.toString().length;
}

console.log(quantidadeDeDigitos("12"))
// ou
function numberOfDigits(value) {
    let numberConverter = Math.abs(value).toString().length;
  
    return numberConverter;
  }
  
  let numberProvided = '12';
  let quantity = numberOfDigits(numberProvided);
  
  console.log(quantity);

//   Exercício 3
//   Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
//   Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo."


function sum2parameters (num1, num2){
    return num1 > num2 ? num1 + num2 : "O primeiro número não é maior que o segundo.";
}

console.log(sum2parameters(1,2));

// Exercício 4
// Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra. Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true. Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.

function words(word, letter) {
    word = word.toLowerCase();
    letter = letter.toLowerCase();
  
    return word[0] === letter[0] ? true : false 
  }
  
  console.log(words('Flamengo', 'faca'));
  console.log(words('cachorro', 'Livro'));

//   Exercício 5
// Desenvolva uma função com o parâmetro horaAtendimento para saber se o horário corresponde com o funcionamento do /pergunta. Se o horário de inicio for maior ou igual a 11 e menor ou igual a 23, retorne "O /pergunta está em horário de funcionamento." Caso contrário retorne "O /pergunta não está em horário de funcionamento."

function operationQuestion(horaAtendimento){
    return horaAtendimento >= 11 & horaAtendimento <= 23 ? "O /pergunta está em horário de funcionamento." : "O /pergunta não está em horário de funcionamento."
  }
  
  console.log(operationQuestion(23))