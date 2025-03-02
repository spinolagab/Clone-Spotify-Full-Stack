import React from "react";
import { Link } from "react-router-dom";

// key não pode ser usado como número
const SongItem = ({ image, name, duration, artist, audio, id, index }) => {
  return (
    <Link to={`/song/${id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{Number(index) + 1}</p>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Imagem da Música ${name}`}
          />
          <p className="song-item__name">{name}</p>
        </div>
      </div>
      <p> {duration} </p>
    </Link>
  );
};

export default SongItem;
