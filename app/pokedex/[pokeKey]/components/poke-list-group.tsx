import React from 'react';
import type { Poke } from '@/app/models/pokev4.type';

interface PokeListGroupProps {
  pokeList: Poke[];
  onClickPoke: (poke: Poke) => void;
}

export default function PokeListGroup({
  pokeList,
  onClickPoke,
}: PokeListGroupProps) {
  const handlePokeClick = (poke: Poke) => {
    onClickPoke(poke);
  };

  return (
    <div className="flex gap-x-2">
      {pokeList.map((poke) => (
        <button
          key={poke.order}
          type="button"
          onClick={() => handlePokeClick(poke)}
          className="hover:text-blue-400"
        >
          {poke.name.ko}
        </button>
      ))}
    </div>
  );
}
