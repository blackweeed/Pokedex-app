import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AdvencedSearch from "./components/AdvencedSearch";
import PokemonGrid from "./components/PokemonGrid";
import Test from "./components/Test";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Test />
    <AdvencedSearch />
    <PokemonGrid />
  </React.StrictMode>
);
