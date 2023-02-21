import axios from "axios";
import { useEffect, useState } from "react";
import "./evolutionofpokemon.css";

const evolutionofpokemon = ({ pokemon }) => {
  const [evolution, setEvolution] = useState([]);
  const [chain, setChain] = useState([]);
  let chainS = evolution?.evolution_chain?.url;
  const getEvolution = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
      .then((res) => setEvolution(res.data));
  };
  const getChain = () => {
    axios.get(`${chainS}`).then((res) => console.log(res.data));
  };

  console.log(chainS);

  useEffect(() => {
    getEvolution();
  }, []);

  useEffect(() => {
    getChain();
  }, []);

  const firstEvolution = evolution?.chain?.evolves_to[0]?.species.name;
  const secondEvolution =
    evolution?.chain?.evolves_to[0].evolves_to[0]?.species.name;

  return (
    <div className="pokemon-detail__evolution">
      <div className="pokemon-evolution">
        <p className="title">Evolution</p>
        <div className="wrapper">
          <div className="pokemon-container">
            <p>001</p>
            <p>Bulbasaur</p>
            <div className="types">
              <p className="grass">Grass</p>
              <p className="poison">Poision</p>
            </div>
          </div>
          <div className="pokemon-container">
            <p>001</p>
            <p>{firstEvolution}</p>
            <div className="types">
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
          </div>
          <div className="pokemon-container">
            <p>001</p>
            <p>{secondEvolution}</p>
            <div className="types">
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default evolutionofpokemon;
