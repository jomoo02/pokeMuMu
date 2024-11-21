import { cache } from 'react';
import { fetchPokeWithPokeKey } from '../lib/poke';

export const getPokeList = cache(async (pokeKey: string) => {
  const pokeList = await fetchPokeWithPokeKey(pokeKey);

  return pokeList;
});
