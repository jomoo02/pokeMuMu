import { cache } from 'react';
// import { fetchSurroundingPoke } from '../api/poke';
import { fetchPokeDetailWithPokeKey } from '../api/detail';
import { fetchPokeEvolutionWiethPokeKey } from '../api/evolution';
import { fetchPokeWithPokeKey, fetchSurroundingPoke } from '../api/pokev4';

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

export const getPokeSurrounding = cache(async (pokeKey: string) => {
  const pokeSurrouding = await fetchSurroundingPoke(pokeKey);

  return pokeSurrouding;
});

// export const getPokeSurrounding = cache(async (pokeKey: string, order: number) => {
//   const pokeSurrouding = await fetchSurroundingPoke(pokeKey, order);

//   return pokeSurrouding;
// });
