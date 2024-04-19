import React, { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        if (!response.ok) {
          throw new Error("fallo en buscar datos del Pokemón");
        }
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.error("Error consultando datos del Pokemón:", error);
      }
    };

    fetchData();
  }, []);

  const fetchPokemonDetails = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error("fallo en buscar detalles del Pokemón");
      }
      const data = await response.json();
      const pokemonDetails = {
        name: data.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        type: data.types.map((type) => type.type.name).join(", "),
        abilities: data.abilities.map((ability) => ability.ability.name),
        weight: data.weight,
        height: data.height,
        hp: data.stats.find((stat) => stat.stat.name === "hp")?.base_stat,
        ap: data.stats.find((stat) => stat.stat.name === "attack")?.base_stat,
        speed: data.stats.find((stat) => stat.stat.name === "speed")?.base_stat,
      };
      setSelectedPokemon(pokemonDetails);
    } catch (error) {
      console.error("fallo en buscar datos del Pokemón:", error);
    }
  };

  return (
    <PokemonContext.Provider
      value={{ pokemon, selectedPokemon, fetchPokemonDetails }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
