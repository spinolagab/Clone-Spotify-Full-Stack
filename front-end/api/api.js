// usar axios para obter os dados do objeto ao inves do objeto
import axios from "axios";

const URL = "http://localhost:3001";

// Requisicoes do back pelo front
const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
