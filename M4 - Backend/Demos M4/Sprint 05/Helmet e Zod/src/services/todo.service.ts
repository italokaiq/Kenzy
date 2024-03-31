import { generateId, todoList } from "../database/database";
import { TTodo, TTodoCreateBody, TTodoUpdateBody } from "../interfaces/todo.interface";

export class TodoService {
  get(search?: string) {
    if (search) {
      const filtered = todoList.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      );

      return filtered;
    }
    return todoList;
  }

  getOne(todo: TTodo): TTodo {
    return todo;
  }

  create(data: TTodoCreateBody): TTodo {
    const date = new Date();

    const newTodo: TTodo = {
      id: generateId(),
      title: data.title,
      content: data.content,
      createdAt: date,
    };

    todoList.push(newTodo);

    return newTodo;
  }

  update(currentTodo: TTodo, data: TTodoUpdateBody) {
    if (currentTodo) {
      const updateTodo = { ...currentTodo, ...data, updatedAt: new Date() };

      const index = todoList.findIndex((todo) => todo.id === currentTodo.id);
      todoList.splice(index, 1, updateTodo);

      return updateTodo;
    }
  }

  delete(id: number) {
    const todo = todoList.findIndex((todo) => todo.id === id);

    todoList.splice(todo, 1);
  }
}