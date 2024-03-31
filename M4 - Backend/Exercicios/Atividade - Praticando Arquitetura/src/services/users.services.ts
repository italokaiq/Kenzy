import { generateId, usersDatabase } from "../database/database";
import { TCreateUserBody } from "../interfaces/users.interfaces";

export class UserService {
    getUsers() {
        return usersDatabase;
    }

    create(data: TCreateUserBody) {
        const newUser = {
            id: generateId(),
            name: data.name,
            email: data.email
        }

        usersDatabase.push(newUser);

        return newUser;
    }
}