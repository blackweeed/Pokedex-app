import { useState } from "react";
import "./advencedSearch.css";
const AdvencedSearch = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="advenced-search">
      <p>Show Advenced Search</p>
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="advenced-search__filters"
      >
        <img
          src={
            toggle
              ? "https://sg.portal-pokemon.com/play/resources/pokedex/img/sort_open_bg.png"
              : "https://sg.portal-pokemon.com/play/resources/pokedex/img/sort_close_bg.png"
          }
          alt=""
        />
        <p>Lowest Number</p>
      </div>
    </div>
  );
};

export default AdvencedSearch;
