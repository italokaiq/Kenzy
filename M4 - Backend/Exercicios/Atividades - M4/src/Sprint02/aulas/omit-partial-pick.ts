interface IUser {
    id: number;
    name: string;
    email: string;
    password: string | number;
    role: string;
}

// Omit - é usado para criar um novo tipo que exclui propriedades específicas de um tipo existente.
type TRegisterData = Omit<IUser, 'id'>;

//Pick - permite que você crie um novo tipo selecionando propriedades específicas de um existente.
type TLoginBody = Pick<IUser, 'email' | 'password'>;

// Partial - Constrói um tipo com todas as propriedades de Type definidas como opcionais.
type TPartialUser = Partial<IUser>;
// const object: TPartialUser = {  }

// Partial + Omit.
type TUpdateData = Partial<TRegisterData>;
const object: TUpdateData = {}