import { cache } from 'react';
import {
  fetchPokeWithPokeKey,
  fetchSurroundingPoke,
} from '../api/poke';
import {
  fetchPokeEvolution,
} from '../api/evolution';

export const getPokeList = cache(async (pokeKey: string) => {
  const pokeList = await fetchPokeWithPokeKey(pokeKey);

  return pokeList;
});

export const getSurroundingPoke = cache(async (pokeKey: string) => {
  const pokeSurrounding = await fetchSurroundingPoke(pokeKey);

  return pokeSurrounding;
});

export const getEvolution = cache(async (pokeKey: string) => {
  const pokeEvolution = await fetchPokeEvolution(pokeKey);

  return pokeEvolution;
});
