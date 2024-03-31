import { generateId, todoList } from "../database/database";
import {
  ITodo,
  TCreateTodoBody,
  TUpdateTodoBody,
} from "../interfaces/todo.interfaces";

export class TodoServices {
  get() {
    return todoList;
  }

  getOne(todo: ITodo) {
    return todo;
  
  }

  create(data: TCreateTodoBody) {
    const newTodo: ITodo = {
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