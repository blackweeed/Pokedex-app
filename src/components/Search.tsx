import { useEffect, useState } from "react";
import { PokemonContext } from "../context/Context";
import "./test.css";
const Search = ({ resultRef }) => {
  const [show, setShow] = useState(false);
  const { setSearch, uniqueObjArray } = PokemonContext();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  const randomPokemon =
    uniqueObjArray[Math.floor(Math.random() * uniqueObjArray.length)]?.sprites
      .other["official-artwork"].front_default;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearch(event.target.value);
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="pokemon-list">
      <div className="pokemon-list__searchbar">
        <p>Search by name or number</p>
        <div>
          <input
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Search ..."
          />
          <button>Suprise me!</button>
        </div>
      </div>
      <div className="pokemon-list__center">
        <div className="pokemon-list__center-top">
          <div className="pokemon-list__center-top__heading">
            <div>
              <img
                src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokedex_bg.png"
                alt=""
              />
              <p>Pokédex</p>
            </div>
          </div>
          <img
            className="pokemon-list__center-top__spin"
            src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png"
            alt=""
          />
          <img
            className={`pokemon-list__center-top__pokemon ${
              show ? "show" : ""
            }`}
            src="https://sg.portal-pokemon.com/play/resources/pokedex/img/random_center_bg.png"
            alt=""
          />
          <img
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            className={`pokemon-list__center-top__pokemon ${
              show ? "show" : ""
            }`}
            src={randomPokemon}
            alt="pokemon"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
