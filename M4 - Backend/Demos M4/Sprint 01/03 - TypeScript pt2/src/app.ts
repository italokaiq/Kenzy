//  exemplo da aula passada

interface IUser {
    id: number;
    name: string;
    email: string;
}

let user: IUser | null;

// type - instância de qualquer tipo.



type TUserOrNull = IUser;