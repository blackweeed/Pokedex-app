import "./pokemon-card.css";

const PokemonCard = () => {
  return (
    <div className="pokemon-card">
      <img
        src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/2fd12098f15628cce80d411e090189aeb7d758ff.png"
        alt=""
      />
      <p>001</p>
      <h2>Charrizard</h2>
      <div>
        <span>Grass</span>
        <span>Poison</span>
      </div>
    </div>
  );
};

export default PokemonCard;
