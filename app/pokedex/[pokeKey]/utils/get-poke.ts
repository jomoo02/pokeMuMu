import { cache } from 'react';
import { fetchPokeWithPokeKey } from '../lib/poke';
import { fetchPokeDetailWithPokeKey } from '../lib/detail';

export const getPokeList = cache(async (pokeKey: string) => {
  const pokeList = await fetchPokeWithPokeKey(pokeKey);

  return pokeList;
});

export const getPokeDetail = cache(async (pokeKey: string) => {
  const pokeDetail = await fetchPokeDetailWithPokeKey(pokeKey);

  return pokeDetail;
});
