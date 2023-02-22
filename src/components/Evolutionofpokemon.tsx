import axios from "axios";
import { useEffect, useState } from "react";
import "./evolutionofpokemon.css";
import uppercaseFirstLetter from "../functions/uppercaseFirstLetter.js";
import { useParams } from "react-router-dom";

const evolutionofpokemon = ({ id }) => {
  const [baseForm, setBaseForm] = useState([]);
  const [firstEvolution, setFirstEvolution] = useState([]);
  const [secondEvolution, setSecondEvolution] = useState([]);
  const [evolution, setEvolution] = useState("");
  const [chain, setChain] = useState([]);

  const getEvolution = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => setEvolution(res.data.evolution_chain?.url));
  };
  const getChain = () => {
    axios.get(evolution).then((res) => setChain(res.data));
  };

  const getBaseForm = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${chain?.chain?.species?.name}`)
      .then((res) => setBaseForm(res.data));
  };
  const getFirstEvolution = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${chain?.chain?.evolves_to[0]?.species.name}`
      )
      .then((res) => setFirstEvolution(res.data));
  };
  const getSecondEvolution = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${chain?.chain?.evolves_to[0]?.evolves_to[0]?.species.name}`
      )
      .then((res) => setSecondEvolution(res.data));
  };

  useEffect(() => {
    getEvolution();
  }, [id]);

  useEffect(() => {
    getChain();
  }, [evolution]);

  useEffect(() => {
    getBaseForm();
    getFirstEvolution();
    getSecondEvolution();
  }, [chain]);

  return (
    <div className="pokemon-detail__evolution">
      <div className="pokemon-evolution">
        <p className="title">Evolution</p>
        {chain?.chain?.evolves_to.length === 0 ||
        chain?.chain?.evolves_to.length === undefined ? (
          <p style={{ color: "white", fontSize: "2rem" }}>
            This Pokémon does not evolve.
          </p>
        ) : (
          <div className="wrapper">
            <div className="pokemon-container">
              <img
                src={baseForm?.sprites?.other["official-artwork"].front_default}
                alt=""
              />
              <p>{baseForm?.id}</p>
              <p>{uppercaseFirstLetter(baseForm?.name)}</p>
              <div className="types">
                {baseForm?.types?.map((type) => (
                  <p className={`${type.type.name}`}>
                    {uppercaseFirstLetter(type.type.name)}
                  </p>
                ))}
              </div>
            </div>
            <div className="pokemon-container">
              <img
                src={
                  firstEvolution?.sprites?.other["official-artwork"]
                    .front_default
                }
                alt=""
              />
              <p>{firstEvolution?.id}</p>
              <p>{uppercaseFirstLetter(firstEvolution?.name)}</p>
              <div className="types">
                {firstEvolution?.types?.map((type) => (
                  <p className={`${type.type.name}`}>
                    {uppercaseFirstLetter(type.type.name)}
                  </p>
                ))}
              </div>
            </div>
            {secondEvolution.length !== 0 ? (
              <div className="pokemon-container">
                <img
                  src={
                    secondEvolution?.sprites?.other["official-artwork"]
                      .front_default
                  }
                  alt=""
                />
                <p>{secondEvolution?.id}</p>
                <p>{uppercaseFirstLetter(secondEvolution?.name)}</p>
                <div className="types">
                  {secondEvolution?.types?.map((type) => (
                    <p className={`${type.type.name}`}>
                      {uppercaseFirstLetter(type.type.name)}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default evolutionofpokemon;
