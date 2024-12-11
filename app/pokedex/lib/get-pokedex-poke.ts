import { cache } from 'react';
import { fetchPokedexPokeList } from '../api/pokedex-poke';

export const getPokedexPokeList = cache(async () => {
  const pokedexPokeList = await fetchPokedexPokeList();

  return pokedexPokeList;
});
