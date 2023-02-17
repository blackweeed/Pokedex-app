import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
      </Routes>
    </>
  );
}

export default App;
