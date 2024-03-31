import { generateId, todoList } from "../database/database";
import { ITodo, TCreateTodoBody, TupdateTodoBody } from "../interfaces/todo.interface";

export class TodoServices {

    getTodos(search?: string) {

        if (search) {
            const filteredTodos = todoList.filter((todo) => todo.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

            return filteredTodos;
        } else {
            return todoList;
        }
    }

    getOneTodo(todo: ITodo) {
        return todo;
    }

    create(data: TCreateTodoBody) {

        const newTodo = {
            id: generateId(),
            title: data.title,
            content: data.content
        }

        todoList.push(newTodo);

        return newTodo;
    }

    update(updateId: number, data: TupdateTodoBody) {

        const currentTodo = todoList.find((todo) => todo.id === updateId);

        if (currentTodo) {
            const index = todoList.findIndex((todo) => todo.id === updateId)
            const newTodo = { ...currentTodo, ...data };

            todoList.splice(index, 1, newTodo);

            return newTodo;
        }
    }

    delete(removingId: number) {

        const index = todoList.findIndex((todo) => todo.id === removingId);

        todoList.splice(index, 1);
    }
}