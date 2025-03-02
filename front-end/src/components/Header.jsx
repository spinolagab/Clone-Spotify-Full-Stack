import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* Usar chaves indica que vai usar java script no jsx */}
      {/* alt é o texto que aparece quando a imagem não carrega por algum motivo */}

      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>
      {/* a href é usado para direcionar a um link */}
      {/* Se quiser levar para a pagina inicial é só colocar a barra */}
      <Link to="/" className="header__link">
        {/* className usado aqui com a metodologia BEM */}
        {/* bloco__elemento--modificador */}
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
