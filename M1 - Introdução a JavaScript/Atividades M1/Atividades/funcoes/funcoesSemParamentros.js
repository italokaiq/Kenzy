// S5-04 | 💪 Atividade: Funções sem Parâmetro

// Exercício 1
// Desenvolva uma função que mostre no console a frase "Hello World!".

function sayHello() {
    console.log("Hello World!");
}

// Exercício 2
// Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).
// Requisitos:

// 100 de Entregas
// 100 de Entrevistas Técnicas
// 100 de Presença


function monitor() {
    let entrega = 100;
    let entrevistaTecnica = 100;
    let presenca = 100;

    if (entrega >= 100 && entrevistaTecnica >= 100 && presenca >= 100) {
        console.log("Possivél monitor(a).");
    } else {
        console.log("Selecionar outro(a) aluno(a).");
    }
}

// Exercício 3
// Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.

const higherNumber = () => {
    let a = 10;
    let b = 8;
    let c = 1;
  
    let numeros = [a, b, c];
  
    numeros.sort((a, b) => b - a);
  
    return numeros[0];
  };
  
  let resultado = higherNumber();
  console.log(resultado);

//   Exercício 4
// Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos".

// Declare as seguintes variáveis dentro da função:

// nome
// sobrenome
// idade

function sayMyName() {
    let name = 'Italo kaiq';
    let surname = 'Magalhães dos Santos';
    let age = 27;
  
    return `Meu nome é ${name} e sobrenome ${surname}, e tenho ${age} anos.`;
  }
  
  let imprimirResultado = sayMyName();
  console.log(resultado)
  