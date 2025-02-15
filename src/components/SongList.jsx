import React from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const initialLimit = 5;

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < initialLimit)
        .map((currentSongObj, Index) => (
          <SongItem {...currentSongObj} index={Index} key={Index} />
        ))}

      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};

export default SongList;
