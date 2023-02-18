import { createContext, useContext, useState } from "react";
import axios from "axios";

const Context = createContext();

export function ContextProvider({ children }: any) {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=300"
  );
  const [search, setSearch] = useState("");

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
  let uniqueObjArray = [
    ...new Map(pokemons.map((item) => [item["id"], item])).values(),
  ];
  uniqueObjArray.sort((a, b) => a.id - b.id);

  return (
    <Context.Provider
      value={{
        search,
        uniqueObjArray,
        setSearch,
        getAllPokemons,
        pokemons,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function PokemonContext() {
  return useContext(Context);
}
