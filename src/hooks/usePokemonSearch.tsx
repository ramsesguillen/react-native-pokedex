import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';
import React, { useEffect, useRef, useState } from 'react'

import { pokemonApi } from '../api/pokemonApi';

export const usePokemonSearch= () => {

  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemoList, setSimplePokemoList] = useState<SimplePokemon[]>([])

  const loadPokemons = async() => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
    mapPokemonList(resp.data.results);
    setIsFetching(false);
  }


  const mapPokemonList = (pkemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pkemonList.map(({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length -2 ];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return { id, name, picture }
    })

    setSimplePokemoList(newPokemonList)
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isFetching,
    simplePokemoList,
    loadPokemons
  };
}
