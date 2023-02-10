import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
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
  uniqueObjArray.sort((a, b) => a.id - b.id);

  console.log(uniqueObjArray);

  return (
    <div>
      <div className="flex  gap-20 flex-wrap justify-center my-20 ">
        {uniqueObjArray.map((item) => {
          return (
            <div
              className={`w-[200px] h-[260px] flex flex-col gap-4 justify-center items-center text-black ${item.types[0].type.name} shadow-md rounded group `}
            >
              <p>#{item.id}</p>
              <img
                className="w-[140px] h-[100px] object-contain group-hover:scale-125 transition-all cursor-pointer "
                src={item.sprites.other.dream_world.front_default}
                alt=""
              />
              <p className="font-medium">
                {item.name.charAt(0).toUpperCase()}
                {item.name.slice(1)}
              </p>
              <span className="flex gap-2">
                {item.types.map((item) => {
                  return (
                    <p className="bg-black/90 rounded px-2 py-1 text-white/90">
                      {item.type.name}
                    </p>
                  );
                })}
              </span>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => getAllPokemons()}
        className="bg-black/90 text-white px-6 py-2 ml-[50%] mb-10 rounded"
      >
        Load More
      </button>
    </div>
  );
}

export default App;
