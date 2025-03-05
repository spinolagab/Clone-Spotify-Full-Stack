// API == Application Programmnig Interface
//endpoint == rota que pode ser acessada dentro de uma api
import path from "path";
import express from "express";
import cors from "cors";
import { database } from "./connect.js";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

// Middleware para permitir o acesso a recursos de outros dominios
app.use(cors());
// app.use(express.json());

app.get("/api/", (request, response) => {
  response.send("Olá, Mundo!");
});

// Nomear as funcoes como assincronas para trabalhar com o await
app.get("/api/artists", async (request, response) => {
  response.send(await database.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await database.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
