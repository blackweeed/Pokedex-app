import "./test.css";
const Test = () => {
  return (
    <div className="pokemon-list">
      <div className="pokemon-list__searchbar">
        <p>Search by name or number</p>
        <div>
          <input type="text" placeholder="Search ..." />
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
            className="pokemon-list__center-top__pokemon"
            src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/5fec90c2ab3eb206d6d87b85fa48f3d895edf665.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
