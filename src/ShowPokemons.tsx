const ShowPokemons = () => {
  return (
    <>
      <div className="main">
        <div className="search">
          <p>Search by name or number</p>
          <div>
            <input type="search" />
            <button>Suprise me</button>
          </div>
        </div>

        <div className="spinning">
          <div className="elo">
            <div className="pokedex">
              <div className="relat">
                <img
                  src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokedex_bg.png"
                  alt=""
                />
                <p>Pokedex</p>
              </div>
            </div>
            <img
              className="spin"
              src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png"
              alt=""
            />

            <img
              className="abs"
              src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/96613b8fe63edfdf800cde823078fadc6ea9aae9.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPokemons;
