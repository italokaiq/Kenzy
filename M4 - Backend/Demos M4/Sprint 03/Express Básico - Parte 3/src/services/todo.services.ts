import { generateId, todoList } from "../database/database";
import { TCreateTodoBody, TUpdateTodoBody } from "../interfaces/todo.interface";

export class TodoServices {
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

  update(id: number, data: TUpdateTodoBody) {
    const currentTodo = todoList.find((todo) => todo.id === id);

    if (currentTodo) {
      const index = todoList.findIndex((todo) => todo.id === id);
      const updateTodo = { ...currentTodo, ...data };

      todoList.splice(index, 1, updateTodo);

      return updateTodo;
    }
  }

  delete(id: number) {
    const index = todoList.findIndex((todo) => todo.id === id);

    todoList.splice(index, 1);
  }
}