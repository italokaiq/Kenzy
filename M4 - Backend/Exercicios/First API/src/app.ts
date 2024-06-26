import express, { json } from 'express';
import { productsRouter } from './routes/products.routes';

const app = express();

app.use(json());

app.use("/products", productsRouter);

const port = 3000;

app.listen(port, () => {
    return console.log(`API sucessfully started on port ${port}`);
})