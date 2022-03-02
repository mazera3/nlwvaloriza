import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import './database/index'

const app = express();
app.use(express.json());

app.use(router);

app.get('/', (req,res) =>{
  return res.send("Teste GET!!!");
})

// executar: yarn dev

app.listen(3000, () => {
  console.log('Server is running in http://localhost:3000');
});
