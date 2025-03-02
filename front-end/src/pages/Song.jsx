import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  // também pode ser const songId = useParams().id;
  const { id } = useParams();

  // Busca binária para encontrar a música desejada
  let initialPos = 0;
  let finalPos = songsArray.length - 1;
  let middlePos = Math.floor((initialPos + finalPos) / 2);
  // Validação para entradas indevidas
  if (Number(id) <= finalPos && Number(id) >= initialPos) {
    // Busca binária pelo artista com o id desejado
    while (songsArray[middlePos].id !== Number(id)) {
      if (songsArray[middlePos].id > id) {
        finalPos = middlePos - 1;
      } else {
        initialPos = middlePos + 1;
      }
      middlePos = Math.floor((initialPos + finalPos) / 2);
    }

    // Se id já não estivesse sendo usado seria possível desestruturar ele da variável
    const { image, name, duration, artist, audio } = songsArray[middlePos];

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
    const randomSongFromArtist = songsArrayFromArtist[randomIndex].id;

    const randomIndex2 = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1)
    );
    const randomSongFromArtist2 = songsArrayFromArtist[randomIndex2].id;

    return (
      <div className="song">
        <div className="song__container">
          <div className="song__image-container">
            <img src={image} alt={`Song ${name} Image`} />
          </div>
        </div>

        <div className="song__bar">
          <Link to={`/artist/${artistObj.id}`}>
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
          />

          <div>
            <p className="song__name">{name}</p>
            <p>{artist}</p>
          </div>
        </div>
      </div>
    );
  } else {
    // Acesso indevido
    return (
      <div>
        <h1>Page not found!</h1>
        <h2>Song doesn't exist or has yet to release.</h2>
      </div>
    );
  }
};

export default Song;
