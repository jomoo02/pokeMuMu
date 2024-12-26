import { useState, useEffect } from 'react';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import type { PokedexPoke } from '@/app/models/pokev4.type';

export default function useLocalPoke() {
  const { loading, localPokeList } = useLocalStorage();
  const [result, setResult] = useState<PokedexPoke[]>([]);

  useEffect(() => {
    if (!loading) {
      setResult(localPokeList);
    }
  }, [loading, localPokeList]);

  return {
    loading,
    result,
  };
}
