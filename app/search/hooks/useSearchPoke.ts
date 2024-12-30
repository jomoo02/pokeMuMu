import { useState, useEffect } from 'react';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import { getSearchPoke } from '../lib/get-search';
import { formatNoSpaceInputText } from '../utils/input-type';

const searchStatus = {
  Idle: 'idle',
  Fetching: 'fetching',
  Success: 'success',
  Empty: 'empty',
  Error: 'error',
} as const;

type SearchStatus = typeof searchStatus[keyof typeof searchStatus];

export default function useSearchPoke(inputText: string, delay: number = 300) {
  const [result, setResult] = useState<PokedexPoke[]>([]);
  const [status, setStatus] = useState<SearchStatus>(searchStatus.Idle);

  const noSpaceInputText = formatNoSpaceInputText(inputText);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const fetchPoke = async () => {
      try {
        setStatus(searchStatus.Fetching);

        const pokeList = await getSearchPoke(noSpaceInputText);

        timeoutId = setTimeout(() => {
          setResult(pokeList);
          setStatus(pokeList.length > 0 ? searchStatus.Success : searchStatus.Empty);
        }, delay);
      } catch (error) {
        console.error('Error fetching search results:', error);

        timeoutId = setTimeout(() => {
          setResult([]);
          setStatus(searchStatus.Error);
        }, delay);
      }
    };

    if (noSpaceInputText) {
      fetchPoke();
    } else {
      setResult([]);
      setStatus(searchStatus.Idle);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [noSpaceInputText, delay]);

  return {
    searchPokeList: result,
    status,
  };
}
