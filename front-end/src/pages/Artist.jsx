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

  // busca binaria atualizada para o modelo de ID hexadecimal (já ordenado) O(log n)
  let initialPos = 0;
  let finalPos = artistArray.length - 1;
  let middlePos = Math.floor((initialPos + finalPos) / 2);
  if (
    id.localeCompare(artistArray[finalPos]._id) <= 0 &&
    id.localeCompare(artistArray[0]._id) >= 0
  ) {
    // Busca binária pelo artista com o id desejado
    while (id.localeCompare(artistArray[middlePos]._id) != 0) {
      let compare = id.localeCompare(artistArray[middlePos]._id);
      if (compare < 0) {
        finalPos = middlePos - 1;
      } else {
        initialPos = middlePos + 1;
      }
      middlePos = Math.floor((initialPos + finalPos) / 2);
    }

    const { name, banner } = artistArray[middlePos];

    // formato de busca linear usado anteriormente O(n)
    // const { name, banner } = artistArray.filter(
    //   (currentArtistObj) => currentArtistObj._id === id
    // )[0];

    // Lista de músicas do artista encontrado
    const songsArrayFromArtist = songsArray.filter(
      (currentSongObj) => currentSongObj.artist === name
    );

    const randomIndex = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1)
    );
    const randomSongFromArtist = songsArrayFromArtist[randomIndex]._id;

    return (
      <div className="artist">
        <div
          className="artist__header"
          style={{
            backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner}`,
          }}
        >
          <h2 className="artist__title">{name}</h2>
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
  } else {
    // Acesso indevido
    return (
      <div>
        <h1>Page not found!</h1>
        <h2>Index out of range</h2>
      </div>
    );
  }
};

export default Artist;
