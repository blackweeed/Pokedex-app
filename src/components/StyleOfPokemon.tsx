import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonContext } from "../context/Context";
import uppercaseFirstLetter from "../functions/uppercaseFirstLetter.js";

import "./styleofpokemon.css";
const StyleOfPokemon = ({ pokemon }) => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279"
  );

  const getAllPokemons = async () => {
    const res = await axios.get(loadMore);
    setLoadMore(res.data.next);
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        setPokemons((currentList) => [...currentList, res.data]);
      });
    }
    createPokemonObject(res.data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  let uniqueObjArray = [
    ...new Map(pokemons.map((item) => [item["id"], item])).values(),
  ];

  const pokemone = uniqueObjArray?.filter((item) =>
    item?.name?.toLowerCase().includes(pokemon?.toLowerCase())
  );

  return (
    <div className="pokemon-style">
      <h2>Style</h2>
      <div className="pokemon-style__styles">
        {pokemone?.slice(0, 5).map((mega) => (
          <div className="container">
            <img
              src={mega.sprites.other["official-artwork"].front_default}
              alt=""
            />
            <p>{mega.id}</p>
            <h3>{uppercaseFirstLetter(mega.name)}</h3>
            <div>
              {mega.types?.map((type) => (
                <p className={`${type.type.name}`}>
                  {uppercaseFirstLetter(type.type.name)}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleOfPokemon;
