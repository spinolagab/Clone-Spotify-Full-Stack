import React from "react";
import Player from "../components/Player";
import { Link } from "react-router-dom";

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src=" https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24 "
            alt="Song Image"
          />
        </div>
      </div>

      <div className="song__bar">
        <Link to="/artist/1">
          <div className="song__artist-image">
            <img
              width={75}
              height={75}
              src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
              alt="Artist Image"
            />
          </div>
        </Link>
        <Player />
        <div>
          <p className="song__name">Song Name</p>
          <p>Artist Name</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
