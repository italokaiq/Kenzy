import { ITodo } from "../interfaces/todo.interface";

// Simulação de um banco de dados

let id = 0;

export const todoList: ITodo[] = [];

export const generateId = () => {
    id++;
    return id;
}