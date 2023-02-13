import PokemonCard from "./PokemonCard";
import "./pokemonGrid.css";

const PokemonGrid = () => {
  return (
    <main className="pokemon-grid">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </main>
  );
};

export default PokemonGrid;
