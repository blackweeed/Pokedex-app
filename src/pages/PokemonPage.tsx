import "./pokemonPage.css";
const PokemonPage = () => {
  return (
    <div className="pokemon-detail">
      <div className="pokemon-detail__header">
        <p>Pokedex</p>
      </div>
      <div className="pokemon-detail__slider">
        <div className="left">
          <img
            src="https://sg.portal-pokemon.com/play/resources/pokedex/img/arrow_left_btn.png"
            alt=""
          />
          <p>
            <span>0003</span>Bulbasaur
          </p>
        </div>
        <div className="pokemon-name">
          <p>0002</p>
          <h1>Ivysaur</h1>
        </div>
        <div className="right">
          <img
            src="https://sg.portal-pokemon.com/play/resources/pokedex/img/arrow_right_btn.png"
            alt=""
          />
          <p>
            Venesaur<span>0003</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
