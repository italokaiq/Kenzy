import { IUsers } from "../interfaces/users.interfaces";

export const usersDatabase: IUsers[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
}