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
  // Se os ids fossem ordenados poderia usar busca binaria
  // mas como usamos os ids robustos do mongo DB sera uma busca em tempo O(n)

  // busca binaria usada anteriormente antes de utilizar o banco de dados + backend
  // let initialPos = 0;
  // let finalPos = artistArray.length - 1;
  // let middlePos = Math.floor((initialPos + finalPos) / 2);
  // if (Number(id) <= finalPos && Number(id) >= initialPos) {
  //   // Busca binária pelo artista com o id desejado
  //   while (artistArray[middlePos].id !== Number(id)) {
  //     if (artistArray[middlePos].id > id) {
  //       finalPos = middlePos - 1;
  //     } else {
  //       initialPos = middlePos + 1;
  //     }
  //     middlePos = Math.floor((initialPos + finalPos) / 2);
  //   }

  //   const { name, banner } = artistArray[middlePos];

  // formato de busca atual para ser compativel
  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj._id === id
  )[0];

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
};

export default Artist;
