import { useState, useEffect } from 'react';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import { getSearchPoke } from '../lib/get-search';

export default function useSearchPoke(inputText: string, delay: number = 300) {
  const [result, setResult] = useState<PokedexPoke[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const pokeList = await getSearchPoke(inputText);
        setResult(pokeList);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setResult([]);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, delay);
      }
    };

    if (inputText) {
      search();
    } else {
      setResult([]);
      setLoading(false);
    }
  }, [inputText, delay]);

  return {
    loading,
    result,
  };
}
