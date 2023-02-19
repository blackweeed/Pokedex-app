import "./pokemonPage.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PokemonContext } from "../context/Context";
import uppercaseFirstLetter from "../functions/uppercaseFirstLetter";
import StyleOfPokemon from "../components/StyleOfPokemon";
import axios from "axios";

const PokemonPage = () => {
  const [weakness, setWeakness] = useState([]);
  const [weakness2, setWeakness2] = useState([]);
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);
  const { uniqueObjArray } = PokemonContext();
  const { id } = useParams();

  const pokemon = uniqueObjArray?.find((pokemon) => pokemon?.id === 6);

  const getType = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${pokemon?.types[0]?.type.name}`)
      .then((res) => setWeakness(res.data));
  };
  const getType2 = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${pokemon?.types[1]?.type.name}`)
      .then((res) => setWeakness2(res.data));
  };

  useEffect(() => {
    getType();
    getType2();
  }, []);

  const weaknesses = weakness?.damage_relations?.double_damage_from;
  const weaknesses2 = weakness2?.damage_relations?.double_damage_from;

  const concatArray = weaknesses?.concat(weaknesses2);

  const essa = concatArray?.filter((item) => item);

  const uniqueTypeName = [
    ...new Map(essa?.map((item) => [item["name"], item])).values(),
  ];

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
          <h1>{uppercaseFirstLetter(pokemon?.name)}</h1>
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
                <p>
                  {uppercaseFirstLetter(pokemon?.abilities[0]?.ability.name)}
                </p>
              </span>
            </div>
          </div>
          <div className="pokemon-main__upper-left">
            <div className="pokemon-type__title">Type</div>
            <div className="pokemon-type">
              {pokemon?.types.map((type) => (
                <p className={`pokemon-type__type ${type.type.name}`}>
                  {uppercaseFirstLetter(type.type.name)}
                </p>
              ))}
            </div>
          </div>
          <div className="pokemon-main__bottom-left">
            <div className="pokemon-type__title">Weakness</div>
            <div className="pokemon-type">
              {uniqueTypeName?.map((item) => (
                <p className={`pokemon-type__type ${item.name}`}>
                  {uppercaseFirstLetter(item.name)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pokemon-detail__stats">
        <div className="left">
          <h2>Versions</h2>
          <img
            src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball_on.png"
            alt=""
          />
          <img
            src="https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png"
            alt=""
          />
        </div>
        <div className="right"></div>
      </div>
      <StyleOfPokemon pokemon={pokemon.name} />
    </div>
  );
};

export default PokemonPage;
