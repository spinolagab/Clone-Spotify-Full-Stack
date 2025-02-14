import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* A repetição pode ser diminuida com o uso de componentes, tornando o código mais legível */}

      {/* Componentes recebem props para não ficar tudo igual */}

      {/* ItemList de Artistas */}
      <ItemList
        title="Artistas"
        items={5}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      {/* ItemList de Músicas */}
      <ItemList
        title="Músicas"
        items={20}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;
