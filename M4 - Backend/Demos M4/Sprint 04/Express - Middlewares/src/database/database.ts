import { ITodo } from "../interfaces/todo.interface";

export const todoList: ITodo[] = [];

let id = 0;

export const generateId = () => {
  id++;
  return id;
};