import { MongoClient } from "mongodb";
import { data } from "react-router-dom";

const URI =
  "mongodb+srv://spinolagab:0qCwNom0padyU6EV@cluster0.uyycw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Instanciar a conexao com o cliente
const client = new MongoClient(URI);

export const database = client.db("spotifyClone");

// // Encontra tudo que estiver dentro da collection e passa de um objeto MongoDB para um array
// const songCollection = await database.collection("songs").find({}).toArray();

// console.log(songCollection);
