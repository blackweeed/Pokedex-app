import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./pokemonGrid.css";

const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=8"
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

  console.log(uniqueObjArray);

  uniqueObjArray.sort((a, b) => a.id - b.id);
  return (
    <div className="pokemon-grid">
      <main className="pokemon-grid__display">
        {uniqueObjArray.map((item) => (
          <PokemonCard
            id={item.id}
            // image={item.sprites.other.dream_world.front_default}
            image={item.sprites.other["official-artwork"].front_default}
            name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            types={item.types}
          />
        ))}
      </main>
      <div className="pokemon-grid__load-more">
        <p onClick={() => getAllPokemons()}>Load more Pokemons</p>
      </div>
    </div>
  );
};

export default PokemonGrid;
