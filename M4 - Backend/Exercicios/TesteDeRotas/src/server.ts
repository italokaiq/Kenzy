import { app } from "./app";

const port = 10;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
    
})