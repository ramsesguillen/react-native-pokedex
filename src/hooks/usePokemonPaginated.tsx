import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';
import React, { useEffect, useRef, useState } from 'react'

import { pokemonApi } from '../api/pokemonApi';

export const usePokemonPaginated = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemoList, setSimplePokemoList] = useState<SimplePokemon[]>([])
  const nextPageURL = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

  const loadPokemons = async() => {
    setIsLoading(true);
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageURL.current);
    nextPageURL.current = resp.data.next;
    mapPokemonList(resp.data.results);
    setIsLoading(false);
  }


  const mapPokemonList = (pkemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pkemonList.map(({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length -2 ];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return { id, name, picture }
    })

    setSimplePokemoList([...simplePokemoList, ...newPokemonList])
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemoList,
    loadPokemons
  };
}
