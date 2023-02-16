import { useState } from "react";
import "./advencedSearch.css";
import open from "../images/open.png";
const AdvencedSearch = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleAdvenced, setToggleAdvenced] = useState(false);

  return (
    <div className="test">
      <div
        className={`advenced-search ${
          toggleAdvenced ? `advenced-search__open` : null
        }`}
      >
        <span
          className="advenced-search__click"
          onClick={() => setToggleAdvenced((prev) => !prev)}
        />
        <p
          className="advenced-search__title"
          onClick={() => setToggleAdvenced((prev) => !prev)}
        >
          {toggleAdvenced ? "Hide Advanced Search" : "Show Advanced Search"}
        </p>
        {toggleAdvenced ? (
          <div className="advenced-search__open-content">
            <div className="top-side">
              <div className="type">
                <p>Type</p>
                <div className="type-classes">
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <span>Normal</span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <span>Fire</span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <span>Water</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="ability">
                <div>
                  <p>Ability</p>
                  <input type="select" />
                </div>
                <div>
                  <span style={{ display: "flex", gap: "5rem" }}>
                    <p>Number</p>
                    <span>1 - 1008</span>
                  </span>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="bottom-side">Area</div>
          </div>
        ) : null}
      </div>
      <div
        className="filter-container-absolute"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? (
          <div className="filter-container-absolute__open">
            <img src={open} alt="" />
            <p>Lowest Numbers</p>
            <ul>
              <li>Lowest Numbers</li>
              <li>Highest Numbers</li>
              <li>Lowest Weight</li>
              <li>Heighest Weight</li>
              <li>Lowest Height</li>
              <li>Highest Height</li>
            </ul>
          </div>
        ) : (
          <div className="filter-container-absolute__close">
            <img
              src="https://sg.portal-pokemon.com/play/resources/pokedex/img/sort_close_bg.png"
              alt=""
            />
            <p>Lowest Numbers</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvencedSearch;
