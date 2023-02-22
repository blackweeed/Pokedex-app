import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonContext } from "../context/Context";
import uppercaseFirstLetter from "../functions/uppercaseFirstLetter.js";

import "./styleofpokemon.css";
const StyleOfPokemon = ({ pokemon }) => {
  const [pokemonStyles, setPokemonStyles] = useState([]);

  const { uniqueObjArray } = PokemonContext();

  const pokemone = uniqueObjArray?.filter((item) =>
    item?.name?.toLowerCase().includes(pokemon?.toLowerCase())
  );

  return (
    <div className="pokemon-style">
      <h2>Style</h2>
      <div className="pokemon-style__styles">
        {pokemone?.map((mega) => (
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
