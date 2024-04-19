import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

const Pokemones = () => {
  const { pokemon } = useContext(PokemonContext);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (selectedPokemon.trim() === "") return;
    navigate(`/pokemon/${selectedPokemon}`);
  };

  return (
    <div>
      <h1 className="text-center my-5">Encuentra a tu Pokemon</h1>
      <div className="selectContainer">
        <select
          className="pokemonSelect"
          value={selectedPokemon}
          onChange={(event) => setSelectedPokemon(event.target.value)}
        >
          <option hidden>Pokemones</option>
          {pokemon.map((poke, id) => (
            <option key={id} value={poke.name}>
              {poke.name}
            </option>
          ))}
        </select>
        <button className="detailsPokemonBtn" onClick={handleNavigate}>
          Ver Detalle
        </button>
      </div>
    </div>
  );
};

export default Pokemones;
