import { cache } from 'react';
import { fetchSearchPoke } from '../api/search-poke';

export const getSearchPoke = cache(async (inputText: string) => {
  const searchPoke = await fetchSearchPoke(inputText);

  return searchPoke;
});
