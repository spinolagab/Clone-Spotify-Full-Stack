// API == Application Programmnig Interface
//endpoint == rota que pode ser acessada dentro de uma api
import express from "express";
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";

const app = express();
const PORT = 3001;

app.get("/", (request, response) => {
  response.send("Olá, Mundo!");
});

app.get("/artists", (request, response) => {
  response.send(artistArray);
});

app.get("/songs", (request, response) => {
  response.send(songsArray);
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
