import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AdvencedSearch from "./components/AdvencedSearch";
import PokemonCard from "./components/PokemonCard";
import PokemonGrid from "./components/PokemonGrid";
import Test from "./components/Test";
import "./index.css";
import ShowPokemons from "./ShowPokemons";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ShowPokemons /> */}
    <Test />
    <AdvencedSearch />
    <PokemonGrid />
  </React.StrictMode>
);
