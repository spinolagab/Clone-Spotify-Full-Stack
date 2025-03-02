// API == Application Programmnig Interface
//endpoint == rota que pode ser acessada dentro de uma api
import express from "express";
import cors from "cors";
import { database } from "./connect.js";

const app = express();
const PORT = 3001;

// Middleware para permitir o acesso a recursos de outros dominios
app.use(cors());
// app.use(express.json());

app.get("/", (request, response) => {
  response.send("Olá, Mundo!");
});

// Nomear as funcoes como assincronas para trabalhar com o await
app.get("/artists", async (request, response) => {
  response.send(await database.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await database.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
