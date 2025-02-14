import React from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <Link to={path} className="item-list__link">
          Mostrar tudo
        </Link>
      </div>
      <div className="item-list__container">
        {/* usa o array de objetos vindo dos arquivos .js e filtra para mostrar apenas a quantidade escolhida*/}
        {/* .map dessa forma faz com que crie o SingleItem por um número de vezes igual ao items */}
        {itemsArray
          .filter((currentValue, index) => index < items)
          // o react precisa que tenha uma chave única em cada SingleItem para manter a organização
          .map((currentObject, index) => (
            // para passar uma cópia de um objeto deve se usar ... se não qualquer alteração que for feita nele irá afetar o objeto de origem
            <SingleItem
              idPath={idPath}
              {...currentObject}
              key={`${currentObject}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
