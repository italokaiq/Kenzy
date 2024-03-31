import { generateId, todoList } from "../database/database";
import {
  ITodo,
  TCreateTodoBody,
  TUpdateTodoBody,
} from "../interfaces/todo.interface";

export class TodoServices {
  //  busca normal
  // get() {
  //   return todoList;
  // }

  // com termo de busca
  get(search?: string) {
    if (search) {
      const filteredTodo = todoList.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      );
      return filteredTodo;
    } else {
      return todoList;
    }
  }

  // Aqui será recebido diretamente o "ITodo" e retornando o mesmo.
  getOne(todo: ITodo) {
    return todo;
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

  // Adptando o update com o res.locals
  // update(data: TUpdateTodoBody, currentTodo: ITodo) {
  //   if (currentTodo) {
  //     const index = todoList.findIndex((todo) => todo.id === currentTodo.id);
  //     const updateTodo = { ...currentTodo, ...data };

  //     todoList.splice(index, 1, updateTodo);
  //     return updateTodo;
  //   }
  // }

  delete(id: number) {
    const index = todoList.findIndex((todo) => todo.id === id);

    todoList.splice(index, 1);
  }
}