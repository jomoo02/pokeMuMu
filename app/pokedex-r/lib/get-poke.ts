import { cache } from 'react';
import { fetchPokedexList } from '../api/poke';

export const getPokeList = cache(async () => {
  const pokeList = await fetchPokedexList();

  return pokeList;
});
