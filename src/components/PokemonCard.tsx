import "./pokemon-card.css";
import { Link } from "react-router-dom";

interface Pokemon {
  id: number;
  image: string;
  name: string;
}

const PokemonCard = ({ id, image, name, types }: Pokemon) => {
  return (
    <Link to={`/${id}`}>
      <div className="pokemon-card">
        <img src={image} alt="" />
        <p>00{id}</p>
        <h2>{name}</h2>
        <div>
          {types.map((item) => (
            <span className={`${item.type.name}`}>
              {item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
