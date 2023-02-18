import "./pokemonPage.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PokemonContext } from "../context/Context";
import axios from "axios";

const PokemonPage = () => {
  const [weakness, setWeakness] = useState();
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);
  const { uniqueObjArray } = PokemonContext();
  const { id } = useParams();

  let pokemon = uniqueObjArray?.find((pokemon) => pokemon?.id === 2);

  const getType = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${pokemon?.types[0].type.name}`)
      .then((res) => setWeakness(res.data));
  };

  useEffect(() => {
    getType();
  }, []);

  const weaknesses = weakness?.damage_relations?.double_damage_from;

  console.log(weaknesses);

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
          <p>00{pokemon?.id}</p>
          <h1>{pokemon?.name}</h1>
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
              {
                <img
                  src={pokemon?.sprites.other["official-artwork"].front_default}
                  alt=""
                  className="pokemon-img__front"
                />
              }
            </div>
          </div>
          <div className="pokemon-main__right">
            <div className="pokemon-info">
              <span>
                <p>Height</p>
                <p>{pokemon?.height}.0 m</p>
              </span>
              <span>
                <p>Category</p>
                <p>Seed Pokemon</p>
              </span>
              <span>
                <p>Weight</p>
                <p>{pokemon?.weight}.0 kg</p>
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
                <p>{pokemon?.abilities[0]?.ability.name}</p>
              </span>
            </div>
          </div>
          <div className="pokemon-main__upper-left">
            <div className="pokemon-type__title">Type</div>
            <div className="pokemon-type">
              <p
                className={`pokemon-type__type ${pokemon?.types[0].type.name}`}
              >
                {pokemon?.types[0].type.name}
              </p>
              {
                <p
                  style={{ left: "10%" }}
                  className={`pokemon-type__type ${pokemon?.types[1]?.type.name}`}
                >
                  {pokemon?.types[1]?.type.name}
                </p>
              }
            </div>
          </div>
          <div className="pokemon-main__bottom-left">
            <div className="pokemon-type__title">Weakness</div>
            {/*  <div className="pokemon-type">
              <p className="pokemon-type__type fire">Fire</p>
              <p className="pokemon-type__type ice">Ice</p>
              <p
                style={{ marginLeft: "10%" }}
                className="pokemon-type__type flying"
              >
                Flying
              </p>
              <p className="pokemon-type__type psychic">Psychic</p>
            </div> */}
            <div className="pokemon-type">
              {weaknesses?.map((item) => (
                <p className={`pokemon-type__type ${item.name}`}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
