import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";
import ReturnBtn from "../components/ReturnBtn";

const Pokemon = () => {
  const { name } = useParams();
  const { selectedPokemon, fetchPokemonDetails } = useContext(PokemonContext);

  useEffect(() => {
    fetchPokemonDetails(name);
  }, [fetchPokemonDetails, name]);

  return (
    <div className="pokemonContainer">
      {selectedPokemon ? (
        <>
          <div className="imgCardContainer">
            <img
              className="imgCard"
              src={selectedPokemon.image}
              alt={selectedPokemon.name}
            />
          </div>
          <div className="Card">
            <h2>{selectedPokemon.name}</h2>
            <ul>
              <li>
                <span>HP: </span>
                {selectedPokemon.hp}
              </li>
              <li>
                <span>Puntos de ataque: </span>
                {selectedPokemon.ap}
              </li>
              <li>
                <span>Velocidad: </span>
                {selectedPokemon.speed}
              </li>
              <li>
                <span>Peso: </span>
                {selectedPokemon.weight / 10} Kg
              </li>
              <li>
                <span>Altura: </span>
                {selectedPokemon.height / 10} m
              </li>
              <li>
                <span>Tipo: </span>
                {selectedPokemon.type}
              </li>
              <li>
                <span>Habilidades: </span>
                {selectedPokemon.abilities.join(", ")}
              </li>
            </ul>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
      <ReturnBtn />
    </div>
  );
};

export default Pokemon;
