interface IPost {
  id: number;
  title: string;
  content: string;
  category: string;
  authorId: number;
}

// Omit - Exclui(não exibe a classe selecionada).
type TPostCreateFormData = Omit<IPost, "id" | "authorId">;

// Pick - pegando chaves e trazendo para um novo tipo.
type TPostParams = Pick<IPost, "authorId">;

// Partial - pega parcialmente um conjunto.
type TPostUpdateData = Partial<TPostCreateFormData>;

// exemplos de private
interface ITodo {
  id: number;
  title: string;
  content: string;
}

class TodoServices {
  private id: number = 1;
  private todoList: ITodo[];

  constructor(todoList: ITodo[] = []) {
    this.todoList = todoList;
  }

  getTodoList() {
    return this.todoList;
  }
}

const exemplo = new TodoServices();
console.log(exemplo.getTodoList);