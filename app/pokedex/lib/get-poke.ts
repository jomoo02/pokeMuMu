import { cache } from 'react';
import { fetchPokeList } from '../api/poke';

export const getPokeList = cache(async () => {
  const pokeList = await fetchPokeList();

  return pokeList;
});
