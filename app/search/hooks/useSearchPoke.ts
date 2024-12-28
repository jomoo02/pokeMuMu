import { useState, useEffect } from 'react';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import { getSearchPoke } from '../lib/get-search';
import { formatNoSpaceInputText } from '../utils/input-type';

export default function useSearchPoke(inputText: string, delay: number = 300) {
  const [result, setResult] = useState<PokedexPoke[]>([]);
  const [status, setStatus] = useState<'idle' | 'fetching' | 'success' | 'empty' | 'error'>('idle');

  const noSpaceInputText = formatNoSpaceInputText(inputText);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const fetchPoke = async () => {
      try {
        setStatus('fetching');
        const pokeList = await getSearchPoke(noSpaceInputText);

        timeoutId = setTimeout(() => {
          setResult(pokeList);
          setStatus(pokeList.length > 0 ? 'success' : 'empty');
        }, delay);
      } catch (error) {
        console.error('Error fetching search results:', error);

        timeoutId = setTimeout(() => {
          setResult([]);
          setStatus('error');
        }, delay);
      }
    };

    if (noSpaceInputText) {
      fetchPoke();
    } else {
      setResult([]);
      setStatus('idle');
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
