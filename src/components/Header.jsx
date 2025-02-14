import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      {/* Usar chaves indica que vai usar java script no jsx */}
      {/* alt é o texto que aparece quando a imagem não carrega por algum motivo */}
      <img src={logoSpotify} alt="Logo do Spotify" />

      {/* a href é usado para direcionar a um link */}
      {/* Se quiser levar para a pagina inicial é só colocar a barra */}
      <a className="header__link" href="/">
        {/* className usado aqui com a metodologia BEM */}
        {/* bloco__elemento--modificador */}
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;
