import axios from "axios";
import { useEffect, useState } from "react";
import "./evolutionofpokemon.css";

const evolutionofpokemon = ({ pokemon }) => {
  const [evolution, setEvolution] = useState("");
  const [chain, setChain] = useState([]);
  const getEvolution = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
      .then((res) => setEvolution(res.data.evolution_chain?.url));
  };
  const getChain = () => {
    axios.get(evolution).then((res) => setChain(res.data));
  };

  console.log(chain);

  useEffect(() => {
    getEvolution();
  }, []);

  useEffect(() => {
    getChain();
  }, [evolution]);

  const baseForm = chain?.chain?.species?.name;
  const firstEvolution = chain?.chain?.evolves_to[0]?.species.name;
  const secondEvolution =
    chain?.chain?.evolves_to[0].evolves_to[0]?.species.name;

  return (
    <div className="pokemon-detail__evolution">
      <div className="pokemon-evolution">
        <p className="title">Evolution</p>
        <div className="wrapper">
          <div className="pokemon-container">
            <p>001</p>
            <p>{baseForm}</p>
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
          {secondEvolution ? (
            <div className="pokemon-container">
              <p>001</p>
              <p>{secondEvolution}</p>
              <div className="types">
                <p className="grass">Grass</p>
                <p className="poison">Poison</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default evolutionofpokemon;
