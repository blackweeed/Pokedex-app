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
      <div className="pokemon-detail__profile">
        <div className="pokemon-main">
          <div className="pokemon-main__center">
            <div className="pokemon-img">
              {
                <img
                  src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png"
                  alt=""
                  className="pokemon-img__back"
                />
              }
              {
                <img
                  src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_circle_bg.png"
                  alt=""
                  className="pokemon-img__blur"
                />
              }
              <img
                src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/3245e4f8c04aa0619cb31884dbf123c6918b3700.png"
                alt=""
                className="pokemon-img__front"
              />
            </div>
          </div>
          <div className="pokemon-main__right"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
