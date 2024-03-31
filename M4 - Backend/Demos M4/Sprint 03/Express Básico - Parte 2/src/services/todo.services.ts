import { generateId, todoList } from "../database/database";
import { TCreateTodoBody } from "../interfaces/todo.interface";

export class TodoService {
  get() {
    return todoList;
  }

  create(data: TCreateTodoBody) {
    const newTodo = {
      id: generateId(),
      title: data.title,
      content: data.content,
    };

    todoList.push(newTodo);

    return newTodo;
  }

  delete(id: number) {
    const index = todoList.findIndex((todo) => todo.id === id);

    todoList.splice(index, 1);
  }
}
