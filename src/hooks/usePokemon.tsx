import { useEffect, useState } from "react"

import { PokemonFull } from "../interfaces/pokemonInterces";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemon = ( id: string ) => {
  const [isLoading, setisLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull)

  const loadPokemon = async() => {
    const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(resp.data);
    setisLoading(false);
  }

  useEffect(() => {
    loadPokemon();
  }, []);


  return {
    isLoading,
    pokemon,
  }
}
