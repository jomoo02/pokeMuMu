import { useEffect, useState } from 'react';
import type { PokedexPoke } from '@/app/models/pokev4.type';

const KEY = 'local-poke';

export default function useLocalStorage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [localPokeList, setLocalPokeList] = useState<PokedexPoke[] | []>([]);

  const excludePokeByOrder = (order: number) => (
    localPokeList.filter((poke: PokedexPoke) => poke.order !== order)
  );

  const saveLocalPoke = (poke: PokedexPoke) => {
    const filteredPokes = excludePokeByOrder(poke.order);

    const savingPokes = JSON.stringify(
      [
        { ...poke },
        ...filteredPokes.slice(0, 5),
      ],
    );
    window.localStorage.setItem(KEY, savingPokes);
  };

  const getLocalPokes = () => {
    const items = window.localStorage.getItem(KEY);

    if (items) {
      return JSON.parse(items);
    }

    return [];
  };

  useEffect(() => {
    const localPoke = getLocalPokes();
    setLocalPokeList(localPoke);
    setLoading(false);
  }, []);

  return {
    loading,
    localPokeList,
    saveLocalPoke,
  };
}
