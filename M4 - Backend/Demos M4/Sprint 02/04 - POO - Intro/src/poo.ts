// Programação orientada a objetos
// Trabalhar com classes
// Agrupamentos de variáveis e métodos (funções)
// Organizando seu código

interface ITodo {
  id: number;
  title: string;
  content: string;
}

// Diretamente na classe(class) não temos LET e CONST

// Planta arquitetônica
class TodoServices {
  id: number = 1;
  todoList: ITodo[] = [];

  // Sempre que eu estou utilizando uma variável ou método declarado no interior da classe, será necessário
  // prefixar com o "this".

  addTodo(title: string, content: string) {
    const newTodo = { id: this.id, title, content };
    this.todoList.push(newTodo);
    this.id++;
  }

  removeTodo(removingId: number) {
    const index = this.todoList.findIndex((todo) => todo.id === removingId);
    this.todoList.splice(index, 1);
  }
}

// Instância - Prédio
const todoServices = new TodoServices();
todoServices.addTodo("Título 1", "Contéudo 1");
todoServices.addTodo("Título 2", "Contéudo 2");
todoServices.removeTodo(1);

