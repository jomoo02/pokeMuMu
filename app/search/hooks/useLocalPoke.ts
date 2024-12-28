import { useState, useEffect } from 'react';
import useLocalStorage from '@/app/hooks/useLocalStorage';

const localStatus = {
  Init: 'init',
  Loaded: 'loaded',
  Empty: 'empty',
} as const;

type LocalStatus = typeof localStatus[keyof typeof localStatus];

export default function useLocalPoke() {
  const { loading, localPokeList } = useLocalStorage();
  const [status, setStatus] = useState<LocalStatus>(localStatus.Init);

  useEffect(() => {
    if (loading) {
      setStatus(localStatus.Init);
    }
    if (localPokeList?.length === 0) {
      setStatus(localStatus.Empty);
    } else {
      setStatus(localStatus.Loaded);
    }
  }, [localPokeList, loading]);

  return {
    loading,
    localPokeList: localPokeList || [],
    status,
  };
}
