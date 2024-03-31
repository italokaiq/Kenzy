interface ITodo {
    id: number;
    title: string;
    content: string;
}

let id = 1;

const todoList: ITodo[] = [];

function addTodo(title: string, content: string) {
    const newTodo: ITodo = { id, content, title }
    todoList.push(newTodo)
}

function removeTodo(removingId: number){
    const index = todoList.findIndex((todo) => todo.id === removingId)
    todoList.splice(index, 1)
}



// interface IUser {
//     id: number;
//     name: string;
//     email: string;
// }

// let id = 1;

// const usersList: IUser [] = [];

// function addNewUser (name:string, email:string){
//     const newUser: IUser = { id, name, email }
//     usersList.push(newUser);
// }

// function removeUser (removingId: number) {
//     const index = usersList.findIndex((user) => user.id === removingId)
//     usersList.splice(index, 1)
// }