import express, { json } from "express";
import { registerRouter } from "./routes/userRegister.routes";

const app = express();

app.use(json());

app.use("/users", registerRouter);

const port = 15;

app.listen(port, () => {
    return console.log(`API sucessfully started on port ${port}`);
});