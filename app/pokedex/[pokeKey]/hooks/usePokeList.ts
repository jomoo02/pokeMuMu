import { useState } from 'react';
import { Poke } from '@/app/models/pokev4.type';

export default function usePokeList(pokeList: Poke[]) {
  const [targetPoke, setTargetPoke] = useState(pokeList[0]);

  const handleTargetPoke = (poke: Poke) => {
    setTargetPoke(poke);
  };

  return {
    targetPoke,
    handleTargetPoke,
  };
}
