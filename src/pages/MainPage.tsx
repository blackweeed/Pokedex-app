import { useRef } from "react";
import AdvencedSearch from "../components/AdvencedSearch";
import PokemonGrid from "../components/PokemonGrid";
import Search from "../components/Search";

const MainPage = () => {
  const resultRef = useRef(null);

  return (
    <main>
      <Search resultRef={resultRef} />
      <AdvencedSearch />
      <PokemonGrid ref={resultRef} />
    </main>
  );
};

export default MainPage;
