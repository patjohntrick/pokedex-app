import React, { useContext } from "react";
import { PokemonContext } from "../App";
import { Link } from "react-router-dom";

const Homepage = () => {
  // context
  const pokemon = useContext(PokemonContext);
  // console.log(pokemon);
  return (
    <section>
      <div className="pokemon-container row pt-3 bg-light">
        {pokemon.map((data, index) => {
          return (
            <div key={index} className="col-md-4">
              <Link
                to={`pokedex-app/pokemon/${data.name}`}
                target="_blank"
                style={{ textDecorationLine: "none" }}
              >
                <p className="bg-white border p-2 text-center rounded text-capitalize">
                  {data.name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Homepage;
