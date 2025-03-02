import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  // useState[valorAtribuido, funçãoParaAtualizarOEstadoDoValorAtribuido]
  const [initialLimit, setInitialLimit] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < initialLimit)
        .map((currentSongObj, Index) => (
          <SongItem {...currentSongObj} index={Index} key={Index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setInitialLimit(initialLimit + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
