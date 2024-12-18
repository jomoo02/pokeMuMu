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
    <div className="flex gap-x-2">
      {pokeList.map((poke) => {
        const isTargetPoke = checkTargetPoke(poke);

        if (isTargetPoke) {
          return (
            <div
              key={poke.order}
              className="px-3 py-1 rounded-lg font-semibold text-[15px] bg-slate-700 text-white border-2 border-slate-700"
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
            className="px-3 py-1 rounded-lg font-semibold text-[15px] bg-white border-2 border-slate-500 hover:bg-[#e2e8f0]"
          >
            {poke.label}
          </button>
        );
      })}
    </div>
  );
}
