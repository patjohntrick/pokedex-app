// import "./App.css";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import PokemonPage from "./components/PokemonPage";
import "bootstrap/dist/css/bootstrap.min.css";

// context
export const PokemonContext = createContext();

function App() {
  const [pokemon, setPokemon] = useState([]);

  // fetch pokemon
  const fetchPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=12`
    );
    const data = await response.data;
    setPokemon(data.results);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  // console.log(pokemon);
  return (
    <div className="App flex container-sm bg-secondary ">
      <header className=" px-4 py-2 text-white">
        <h1>Pokedex</h1>
      </header>
      <section>
        <PokemonContext.Provider value={pokemon}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="pokemon/:name" element={<PokemonPage />} />
          </Routes>
        </PokemonContext.Provider>
      </section>
    </div>
  );
}

export default App;
