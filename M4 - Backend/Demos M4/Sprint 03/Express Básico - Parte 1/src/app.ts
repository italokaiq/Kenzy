import express, { json } from "express";

// Express - permite a criação de rotas, oferece/levantar o servidor local

const app = express();

app.use(json()); // utilizamos para enviar as info

// app.get("/hello", (req, res) => {
//   // res = resposta - é o que desejamos estabelecer como retorno da rota
//   return res.status(200).json({ message: "Olá mundo!" });
// });

// crud
interface ITodo {
  id: number;
  title: string;
  content: string;
}

let id = 1;

const todoList: ITodo[] = [];

app.get("/", (req, res) => {
  return res.status(200).json(todoList);
});

app.post("/todo", (req, res) => {
  //req - requisição - todo o conjunto de dados fornecidos externamente(tudo que vem de fora(dados)).
  // req.body, req.params, req.headers, req.query

  //   return res.status(20).json(req.body);
  //   return res.status(20).json(req.params);
  //   return res.status(20).json(req.body);

  const newTodo: ITodo = {
    id,
    title: req.body.title,
    content: req.body.content,
    // ou
    // ...req.body
  };

  todoList.push(newTodo);
  id++;

  return res.status(201).json(newTodo);
});

app.delete("/todo/:id", (req, res) => {
  // Todo parâmetro virá no formato de string, é necessário converter para number
  const index = todoList.findIndex((todo) => todo.id === Number(req.params.id));

  //   ou

  // const { id } = req.params;
  // const index = todoList.findIndex((todo) => todo.id === Number(id))

  todoList.splice(index, 1);

  return res.status(204).json();
});

app.listen(3000, () => {
  console.log(`API sucessfullty stated`);
});
