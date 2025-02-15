import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  // id da pagina salvo
  const { id } = useParams();

  let initialPos = 0;
  let finalPos = artistArray.length - 1;
  let middlePos = Math.floor((initialPos + finalPos) / 2);

  // Busca binária pelo artista com o id desejado
  while (artistArray[middlePos].id !== Number(id)) {
    if (artistArray[middlePos].id > id) {
      finalPos = middlePos - 1;
    } else {
      initialPos = middlePos + 1;
    }
    middlePos = Math.floor((initialPos + finalPos) / 2);
  }

  const artistObj = artistArray[middlePos];

  // Lista de músicas do artista encontrado
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomSongFromArtist = songsArrayFromArtist[randomIndex].id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artistObj.banner}`,
        }}
      >
        <h2 className="artist__title">{artistObj.name}</h2>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtist} />
      </div>
      <Link to={`/song/${randomSongFromArtist}`}>
        <FontAwesomeIcon
          // class name composta para pegar o css de ambos os single-item especificados
          className="single-item__icon  single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
