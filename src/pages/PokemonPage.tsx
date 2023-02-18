import "./pokemonPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const PokemonPage = () => {
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);

  return (
    <div className="pokemon-detail">
      <div className="pokemon-detail__header">
        <Link to="/">
          <p>Pokédex</p>
        </Link>
      </div>
      <div className="pokemon-detail__slider">
        <div className="left">
          <img
            onMouseEnter={() => setIsShownLeft(true)}
            onMouseLeave={() => setIsShownLeft(false)}
            src={
              isShownLeft
                ? "https://sg.portal-pokemon.com/play/resources/pokedex/img/arrow_left_btn_on.png"
                : "https://sg.portal-pokemon.com/play/resources/pokedex/img/arrow_left_btn.png"
            }
            alt=""
          />
          <p>
            <span>0003</span>Bulbasaur
          </p>
        </div>
        <div className="pokemon-name">
          <p>0002</p>
          <h1>Ivysaur</h1>
        </div>
        <div className="right">
          <img
            onMouseEnter={() => setIsShownRight(true)}
            onMouseLeave={() => setIsShownRight(false)}
            src={
              isShownRight
                ? "https://sg.portal-pokemon.com/play/resources/pokedex/img/arrow_right_btn_on.png"
                : "https://sg.portal-pokemon.com/play/resources/pokedex/img/arrow_right_btn.png"
            }
            alt=""
          />
          <p>
            Venesaur<span>0003</span>
          </p>
        </div>
      </div>
      <div className="pokemon-detail__profile">
        <div className="pokemon-main">
          <div className="pokemon-main__center">
            <div className="pokemon-img">
              {
                <img
                  src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png"
                  alt=""
                  className="pokemon-img__back"
                />
              }
              {
                <img
                  src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_circle_bg.png"
                  alt=""
                  className="pokemon-img__blur"
                />
              }
              <img
                src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/3245e4f8c04aa0619cb31884dbf123c6918b3700.png"
                alt=""
                className="pokemon-img__front"
              />
            </div>
          </div>
          <div className="pokemon-main__right">
            <div className="pokemon-info">
              <span>
                <p>Height</p>
                <p>1.0 m</p>
              </span>
              <span>
                <p>Category</p>
                <p>Seed Pokemon</p>
              </span>
              <span>
                <p>Weight</p>
                <p>13.0 kg</p>
              </span>
              <span>
                <p>Gender</p>
                <span
                  style={{
                    display: "flex",
                    alignItems: "start",
                    gap: "6px",
                    marginTop: "4px",
                  }}
                >
                  <img
                    src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_male.png"
                    alt=""
                  />
                  <span style={{ fontSize: "1rem", fontWeight: "600" }}>/</span>
                  <img
                    src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_female.png"
                    alt=""
                  />
                </span>
              </span>
              <span>
                <p>Ability</p>
                <p>Overgrow</p>
              </span>
            </div>
          </div>
          <div className="pokemon-main__upper-left">
            <div className="pokemon-type__title">Type</div>
            <div className="pokemon-type">
              <p className="pokemon-type__type grass">Grass</p>
              <p style={{ left: "10%" }} className="pokemon-type__type poison">
                Poison
              </p>
            </div>
          </div>
          <div className="pokemon-main__bottom-left">
            <div className="pokemon-type__title">Weakness</div>
            <div className="pokemon-type">
              <p className="pokemon-type__type fire">Fire</p>
              <p className="pokemon-type__type ice">Ice</p>
              <p
                style={{ marginLeft: "10%" }}
                className="pokemon-type__type flying"
              >
                Flying
              </p>
              <p className="pokemon-type__type psychic">Psychic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
