import React from 'react';
import type { Poke } from '@/app/models/pokev4.type';

interface PokeListGroupProps {
  pokeList: Poke[];
  targetPoke: Poke;
  onClickPoke: (poke: Poke) => void;
}

export default function PokeListGroup({
  pokeList,
  targetPoke,
  onClickPoke,
}: PokeListGroupProps) {
  const handlePokeClick = (poke: Poke) => {
    onClickPoke(poke);
  };

  const checkTargetPoke = (poke: Poke) => poke.order === targetPoke.order;

  return (
    <div className="flex mx-1 pb-1.5 gap-x-1.5 overflow-x-auto">
      {pokeList.map((poke) => {
        const isTargetPoke = checkTargetPoke(poke);

        if (isTargetPoke) {
          return (
            <div
              key={poke.order}
              className="px-3 lg:px-3.5 py-1 border-b-2 border-blue-400 text-blue-600 text-nowrap"
            >
              {poke.label}
            </div>
          );
        }
        return (
          <button
            key={poke.order}
            type="button"
            onClick={() => handlePokeClick(poke)}
            className="px-3 lg:px-3.5 py-1 border-b-2 border-transparent bg-white hover:border-b-2 hover:border-slate-400 text-nowrap"
          >
            {poke.label}
          </button>
        );
      })}
    </div>
  );
}
