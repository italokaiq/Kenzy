import { ITodo } from "../interfaces/todo.interfaces";

export const todoList: ITodo[] = [];

let id = 0;

export const generateId = () => {
  id++;
  return id;
};