import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  // também pode ser const songId = useParams().id;
  const { id } = useParams();

  // busca binaria atualizada para o modelo de ID hexadecimal (já ordenado) O(log n)
  let initialPos = 0;
  let finalPos = songsArray.length - 1;
  let middlePos = Math.floor((initialPos + finalPos) / 2);
  // // Validação para entradas indevidas
  if (
    id.localeCompare(songsArray[finalPos]._id) <= 0 &&
    id.localeCompare(songsArray[0]._id) >= 0
  ) {
    // Busca binária pela musica com o id desejado
    while (id.localeCompare(songsArray[middlePos]._id) != 0) {
      let compare = id.localeCompare(songsArray[middlePos]._id);
      if (compare < 0) {
        finalPos = middlePos - 1;
      } else {
        initialPos = middlePos + 1;
      }
      middlePos = Math.floor((initialPos + finalPos) / 2);
    }

    const { image, name, duration, artist, audio } = songsArray[middlePos];

    // Metodo de busca usado anteriormente em O(n)
    // const { image, name, duration, artist, audio } = songsArray.filter(
    //   (currentSongObj) => currentSongObj._id === id
    // )[0];

    // Busca linear pelo nome do artista (nomes não estão ordenados)
    const artistObj = artistArray.filter(
      (currentArtistObj) => currentArtistObj.name === artist
    )[0];

    const songsArrayFromArtist = songsArray.filter(
      (currentSongObj) => currentSongObj.artist === artist
    );

    // Funciona como se o shuffle estivesse sempre ativo e vai para músicas aleatórias
    const randomIndex = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1)
    );
    const randomSongFromArtist = songsArrayFromArtist[randomIndex]._id;

    const randomIndex2 = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1)
    );
    const randomSongFromArtist2 = songsArrayFromArtist[randomIndex2]._id;

    return (
      <div className="song">
        <div className="song__container">
          <div className="song__image-container">
            <img src={image} alt={`Song ${name} Image`} />
          </div>
        </div>

        <div className="song__bar">
          <Link to={`/artist/${artistObj._id}`}>
            <div className="song__artist-image">
              <img
                width={75}
                height={75}
                src={artistObj.image}
                alt={`${artist} Artist Image`}
              />
            </div>
          </Link>

          <Player
            duration={duration}
            randomSongFromArtist={randomSongFromArtist}
            randomSongFromArtist2={randomSongFromArtist2}
            audio={audio}
          />

          <div>
            <p className="song__name">{name}</p>
            <p>{artist}</p>
          </div>
        </div>
      </div>
    );
  } else {
    // pagina de busca indevida
    return (
      <div>
        <h1>Page not found!</h1>
        <h2>Song doesn't exist or has yet to release.</h2>
      </div>
    );
  }
};

export default Song;
