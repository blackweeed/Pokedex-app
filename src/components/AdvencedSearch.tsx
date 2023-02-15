import { useState } from "react";
import "./advencedSearch.css";
import open from "../images/open.png";
const AdvencedSearch = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleAdvenced, setToggleAdvenced] = useState(false);

  console.log(toggleAdvenced);

  return (
    <div className="test">
      <div
        className={`advenced-search ${
          toggleAdvenced ? `advenced-search__open` : null
        }`}
      >
        <span onClick={() => setToggleAdvenced((prev) => !prev)} />
        <p onClick={() => setToggleAdvenced((prev) => !prev)}>
          {toggleAdvenced ? "Hide Advanced Search" : "Show Advanced Search"}
        </p>
      </div>
      <div
        className="filter-container-absolute"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? (
          <img src={open} alt="" />
        ) : (
          <img
            src="https://sg.portal-pokemon.com/play/resources/pokedex/img/sort_close_bg.png"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default AdvencedSearch;
