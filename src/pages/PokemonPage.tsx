import "./pokemonPage.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import uppercaseFirstLetter from "../functions/uppercaseFirstLetter";
import StyleOfPokemon from "../components/StyleOfPokemon";
import Evolutionofpokemon from "../components/Evolutionofpokemon";
import axios from "axios";
import VersionAndStats from "../components/VersionAndStats";

const PokemonPage = () => {
  const [weakness, setWeakness] = useState([]);
  const [weakness2, setWeakness2] = useState([]);
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const { id } = useParams();
  const test3 = pokemons?.types?.map((item) => item.type.name);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setPokemons(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const getType = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${test3[0]}`)
      .then((res) => setWeakness(res.data));
  };
  const getType2 = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${test3[1]}`)
      .then((res) => setWeakness2(res.data));
  };

  const weaknesses = weakness?.damage_relations?.double_damage_from;
  const weaknesses2 = weakness2?.damage_relations?.double_damage_from;

  const concatArray = weaknesses?.concat(weaknesses2);

  const essa = concatArray?.filter((item) => item);

  const uniqueTypeName = [
    ...new Map(essa?.map((item) => [item["name"], item])).values(),
  ];

  useEffect(() => {
    if (test3 !== undefined) {
      getType();
      getType2();
    }
  }, [pokemons]);

  return (
    <div className="pokemon-detail">
      <div className="pokemon-detail__header">
        <Link to="/">
          <p>Pokédex</p>
        </Link>
      </div>
      <div className="pokemon-detail__slider">
        <div className="left">
          <Link to={`/${Number(id) - 1}`}>
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
          </Link>
          <p>
            <span>{Number(id) - 1}</span>
          </p>
        </div>
        <div className="pokemon-name">
          <p>{pokemons?.id}</p>
          <h1>{uppercaseFirstLetter(pokemons?.name)}</h1>
        </div>
        <div className="right">
          <Link to={`/${Number(id) + 1}`}>
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
          </Link>
          <p>
            <span>{Number(id) + 1}</span>
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
                  src={
                    pokemons?.sprites?.other["official-artwork"].front_default
                  }
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
                <p>{pokemons?.height}.0 m</p>
              </span>
              <span>
                <p>Category</p>
                <p>Seed Pokemon</p>
              </span>
              <span>
                <p>Weight</p>
                <p>{pokemons?.weight}.0 kg</p>
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
                {pokemons?.abilities?.map((ability) => (
                  <p>{uppercaseFirstLetter(ability.ability.name)}</p>
                ))}
              </span>
            </div>
          </div>
          <div className="pokemon-main__upper-left">
            <div className="pokemon-type__title">Type</div>
            <div className="pokemon-type">
              {pokemons?.types?.map((type) => (
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

      <VersionAndStats id={id} stats={pokemons.stats} />
      <StyleOfPokemon pokemon={pokemons?.name} />
      <Evolutionofpokemon id={id} />

      <Link to="/">
        <div
          className="pokemon-grid__load-more"
          style={{
            position: "relative",
            top: "6rem",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          <p>Back to Pokedex</p>
        </div>
      </Link>
    </div>
  );
};

export default PokemonPage;
