import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonContext } from "../context/Context";
import "./styleofpokemon.css";
const StyleOfPokemon = ({ pokemon }) => {
  const [pokemonStyles, setPokemonStyles] = useState([]);

  const { uniqueObjArray } = PokemonContext();

  const pokemone = uniqueObjArray?.filter((item) =>
    item?.name.toLowerCase().includes(pokemon.toLowerCase())
  );

  console.log("pokemone", pokemone);

  return (
    <div className="pokemon-style">
      <h2>Style</h2>
      <div className="pokemon-style__styles">
        {pokemone?.map((mega) => (
          <div className="container">{mega.name}</div>
        ))}
      </div>
    </div>
  );
};

export default StyleOfPokemon;
