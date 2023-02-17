import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./pokemonGrid.css";
import loaderPikaPika from "../images/pikatchu.png";
import { PokemonContext } from "../context/Context";
import { forwardRef } from "react";

const PokemonGrid = forwardRef((props, ref) => {
  const [paginate, setpaginate] = useState(12);
  const [loader, setLoader] = useState(true);
  const { getAllPokemons, uniqueObjArray, search } = PokemonContext();

  useEffect(() => {
    getAllPokemons();
    setTimeout(() => {
      setLoader(false);
    }, 600);
  }, []);

  const loadMorePokemons = () => {
    setpaginate((prevValue) => prevValue + 12);
  };

  return (
    <div className="pokemon-grid" ref={ref}>
      {loader ? (
        <div className="loader">
          <img src={loaderPikaPika} alt="" />
        </div>
      ) : (
        <main className="pokemon-grid__display">
          {uniqueObjArray
            .filter((item) =>
              item.name.toLowerCase().includes(search?.toLocaleLowerCase())
            )
            .slice(0, paginate)
            .map((item) => (
              <PokemonCard
                id={item.id}
                image={item.sprites.other["official-artwork"].front_default}
                name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                types={item.types}
              />
            ))}
        </main>
      )}
      <div className="pokemon-grid__load-more">
        <p onClick={loadMorePokemons}>Load more Pokemons</p>
      </div>
    </div>
  );
});

export default PokemonGrid;
