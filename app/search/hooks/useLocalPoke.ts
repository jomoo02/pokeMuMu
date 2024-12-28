import { useState, useEffect } from 'react';
import useLocalStorage from '@/app/hooks/useLocalStorage';

export default function useLocalPoke() {
  const { loading, localPokeList } = useLocalStorage();
  const [status, setStatus] = useState<'init' | 'loaded' | 'empty'>('init');

  useEffect(() => {
    if (loading) {
      setStatus('init');
    }
    if (localPokeList?.length === 0) {
      setStatus('empty');
    } else {
      setStatus('loaded');
    }
  }, [localPokeList, loading]);

  return {
    loading,
    localPokeList: localPokeList || [],
    status,
  };
}
