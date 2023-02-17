import "./advencedSearch.css";
import { useState } from "react";

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
                    <label htmlFor="">
                      <input type="checkbox" name="type" id="normal" />
                      <span className="normal">Normal</span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <span className="fire">Fire</span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <span className="water">Water</span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <span className="grass">Grass</span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <span className="electric">Electric</span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">
                      <span className="ice">Ice</span>
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
                  <span
                    style={{
                      display: "flex",
                      gap: "4.6rem",
                      fontSize: "1.8rem",
                    }}
                  >
                    <p>Number</p>
                    <span>1 - 1008</span>
                  </span>
                  <span className="range"></span>
                </div>
              </div>
            </div>
            <div className="bottom-side">
              <p className="title">Area</p>
              <div className="regions">
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Kanto</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Johnto</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Hoenn</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Sinnoh</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Sinnoh</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Sinnoh</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Sinnoh</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Sinnoh</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Sinnoh</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Sinnoh</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="">
                    <span className="region">Sinnoh</span>
                  </label>
                </div>
              </div>
              <div className="buttons">
                <button className="reset">Reset</button>
                <button className="search">Search</button>
              </div>
            </div>
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
