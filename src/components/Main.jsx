import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas Populares</h2>
          <a className="main__link" href="/">
            Mostrar tudo
          </a>
        </div>
        <div className="item-list__container">
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="Imagem Henrique & Juliano"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Henrique & Juliano</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9"
                  alt="Imagem Mc Tuto"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Mc Tuto</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706"
                  alt="Jorge & Mateus"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Jorge & Mateus</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174b4c07f06044ca6f1a8548192"
                  alt="Imagem NATTAN"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">NATTAN</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1"
                  alt="Imagem Grupo Menos É Mais"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Grupo Menos É Mais</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051747098ffe23a919f7742979c6e"
                  alt="Imagem Zé Neto & Cristiano"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Zé Neto & Cristiano</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174b97627e4ea832ed67617627a"
                  alt="Imagem Matheus & Kauan"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Matheus & Kauan</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          {/* <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45"
                  alt="Imagem Oruam"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <p className="single-item__title">Oruam</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="item-list">
        <div className="item-list__header">
          <h2>Músicas Populares</h2>
          <a className="main__link" href="/">
            Mostrar tudo
          </a>
        </div>
        <div className="item-list__container">
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                  alt="Imagem Henrique & Juliano"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Henrique & Juliano</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9"
                  alt="Imagem Mc Tuto"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Mc Tuto</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706"
                  alt="Jorge & Mateus"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Jorge & Mateus</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174b4c07f06044ca6f1a8548192"
                  alt="Imagem NATTAN"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">NATTAN</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1"
                  alt="Imagem Grupo Menos É Mais"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Grupo Menos É Mais</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab676161000051747098ffe23a919f7742979c6e"
                  alt="Imagem Zé Neto & Cristiano"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Zé Neto & Cristiano</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174b97627e4ea832ed67617627a"
                  alt="Imagem Matheus & Kauan"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className="single-item__title">Matheus & Kauan</p>
              </div>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45"
                  alt="Imagem Oruam"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <p className="single-item__title">Oruam</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45"
                  alt="Imagem Oruam"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <p className="single-item__title">Oruam</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45"
                  alt="Imagem Oruam"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <p className="single-item__title">Oruam</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45"
                  alt="Imagem Oruam"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <p className="single-item__title">Oruam</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45"
                  alt="Imagem Oruam"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <p className="single-item__title">Oruam</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45"
                  alt="Imagem Oruam"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <p className="single-item__title">Oruam</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>

          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img
                  className="single-item__image"
                  src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45"
                  alt="Imagem Oruam"
                />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <p className="single-item__title">Oruam</p>
              <p className="single-item__type">Artistas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
