import { cache } from 'react';
import { fetchPokeWithPokeKey, fetchSurroundingPoke } from '../api/poke';
import { fetchPokeDetailWithPokeKey } from '../api/detail';
import { fetchPokeEvolutionWiethPokeKey } from '../api/evolution';

export const getPokeList = cache(async (pokeKey: string) => {
  const pokeList = await fetchPokeWithPokeKey(pokeKey);

  return pokeList;
});

export const getPokeDetail = cache(async (pokeKey: string) => {
  const pokeDetail = await fetchPokeDetailWithPokeKey(pokeKey);

  return pokeDetail;
});

export const getPokeEvolution = cache(async (pokeKey: string) => {
  const pokeEvolution = await fetchPokeEvolutionWiethPokeKey(pokeKey);

  return pokeEvolution;
});

export const getPokeSurrounding = cache(async (pokeKey: string, order: number) => {
  const pokeSurrouding = await fetchSurroundingPoke(pokeKey, order);

  return pokeSurrouding;
});

// export const getPokeSurrounding = cache(async (pokeKey: string, order: number) => {
//   const pokeSurrouding = await fetchSurroundingPoke(pokeKey, order);

//   return pokeSurrouding;
// });
