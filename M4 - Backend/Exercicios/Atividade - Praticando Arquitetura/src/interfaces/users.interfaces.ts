export interface IUsers{
    id: number;
    name: string;
    email: string;
}

export type TCreateUserBody = Omit<IUsers, "id">;