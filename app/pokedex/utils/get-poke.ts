import { cache } from 'react';
import { fetchPoke } from '@/app/_lib/poke';

export const getPokeList = cache(async () => {
  const pokeList = await fetchPoke();

  return [pokeList, pokeList];
});
