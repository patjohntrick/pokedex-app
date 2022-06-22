import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonPage = () => {
  // state
  const [pokemon, setPokemon] = useState({});

  // params
  const params = useParams();

  // fetch pokemon
  const fetchPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    );
    const data = await response.data;
    setPokemon(data);
    console.log(data);
  };

  // type
  const type = pokemon.name
    ? pokemon.types.map((data) => data.type.name)
    : "Loading";
  //   console.log(type);

  // abilities
  const abilities = pokemon.name
    ? pokemon.abilities.map((data) => data.ability.name)
    : "Loading";
  //   console.log(abilities);

  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <section>
      <div className="row px-4 pt-3 bg-light row">
        <div className="img-container col d-flex justify-content-center bg-white pb-4">
          <img
            src={
              pokemon.name
                ? `${pokemon.sprites.other.home.front_default}`
                : null
            }
            alt=""
            className=" w-50"
          />
        </div>
        <div className="text-container col">
          <p className="fs-3 fw-bolder">
            Name:{" "}
            <span className="fs-5 text-capitalize fw-normal">
              {pokemon.name}
            </span>
          </p>
          <p className="fs-5 fw-bolder">
            Type:{" "}
            <span className="fs-5 text-capitalize fw-normal">{`${type}`}</span>
          </p>
          <p className="fs-5 fw-bolder">
            Abilities:{" "}
            <span className="fs-5 text-capitalize fw-normal">{`${abilities}`}</span>
          </p>
        </div>
        <div className="stats px-4 pt-2">
          <header className="fs-5 fw-bolder">Stats</header>
          {pokemon.name
            ? pokemon.stats.map((data, index) => {
                return (
                  <p
                    key={index}
                    className="text-capitalize lh-1 mt-1"
                  >{`${data.stat.name}: ${data.base_stat}`}</p>
                );
              })
            : "Loading"}
        </div>
      </div>
    </section>
  );
};

export default PokemonPage;
