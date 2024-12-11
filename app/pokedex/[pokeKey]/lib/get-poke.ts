import { cache } from 'react';
import {
  fetchPokeWithPokeKey,
  fetchSurroundingPoke,
} from '../api/poke';

export const getPokeList = cache(async (pokeKey: string) => {
  const pokeList = await fetchPokeWithPokeKey(pokeKey);

  return pokeList;
});

export const getSurroundingPoke = cache(async (pokeKey: string) => {
  const pokeSurrounding = await fetchSurroundingPoke(pokeKey);

  return pokeSurrounding;
});
