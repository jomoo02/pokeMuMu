import { cache } from 'react';
// import {
//   fetchPokeWithPokeKey,
//   fetchSurroundingPoke,
// } from '../api/poke';
// import {
//   fetchPokeEvolution,
// } from '../api/evolution';
import {
  fetchPokeV2,
} from '../api/poke-v2';

// export const getPokeList = cache(async (pokeKey: string) => {
//   const pokeList = await fetchPokeWithPokeKey(pokeKey);

//   return pokeList;
// });

// export const getSurroundingPoke = cache(async (pokeKey: string) => {
//   const pokeSurrounding = await fetchSurroundingPoke(pokeKey);

//   return pokeSurrounding;
// });

// export const getEvolution = cache(async (pokeKey: string) => {
//   const pokeEvolution = await fetchPokeEvolution(pokeKey);

//   return pokeEvolution;
// });

export const getPokeV2 = cache(async (pokeKey: string) => {
  const pokeV2 = await fetchPokeV2(pokeKey);

  return pokeV2;
});
