import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./pokemonGrid.css";
import loaderPikaPika from "../images/pikatchu.png";

const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=300"
  );
  const [search, setSearch] = useState("");
  const [paginate, setpaginate] = useState(12);
  const [loader, setLoader] = useState(true);

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
    setTimeout(() => {
      setLoader(false);
    }, 400);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  let uniqueObjArray = [
    ...new Map(pokemons.map((item) => [item["id"], item])).values(),
  ];
  uniqueObjArray.sort((a, b) => a.id - b.id);

  const loadMorePokemons = () => {
    setpaginate((prevValue) => prevValue + 12);
  };

  return (
    <div className="pokemon-grid">
      <input onChange={(e) => setSearch(e.target.value)} type="text" />
      {loader ? (
        <div className="loader">
          <img src={loaderPikaPika} alt="" />
        </div>
      ) : (
        <main className="pokemon-grid__display">
          {uniqueObjArray
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLocaleLowerCase())
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
};

export default PokemonGrid;
