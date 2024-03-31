// interface é um tipo que descreve especificamente objetos.

interface ITodo {
    id: number;
    title: string;
    content: string;
}

const todoList: ITodo[] = [];

// Funçã opara adicionar na lista.

let id = 1;

function addTodo (title: string, content: string)  {
    const newTodo: ITodo = { id, title, content }

    todoList.push(newTodo);
    id++;

    return newTodo;
}

function removeTodo(removingId: number){
    const index = todoList.findIndex(todo => todo.id === removingId);
    todoList.splice(index, 1);
}

//  Podemos apontar tipos em qualquer circunstância, mas não precisamos apontar aponta-los.

// Inferência - ela deduz o que está sendo realizado.
// Quando a inferência falha ou não consegue deduzir o que está sendo passo, é necessário apontar TIPOS (Obrigatório).

/* exemplos

- listas vazias
- parâmetros sem tipagem
- tipos variáveis

*/

interface IUser {
    id: number;
    name: string;
    email: string;
}

// union type.
let user: IUser | null;  //  pode ser nulo e pode ser objeto de usuário.
