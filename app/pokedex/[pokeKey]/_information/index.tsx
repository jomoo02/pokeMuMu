'use client';

import React, { useState } from 'react';
import type { Poke } from '@/app/models/poke.type';
import Information from './components/information';
import PokeStats from '../_stats';
import PokeDefenseCompatibility from '../_defense-compatibility';
import PokeAbilities from '../_abilities';

interface PokeInformationListProps {
  pokeList: Poke[];
}

export default function PokeInformationList({
  pokeList,
}: PokeInformationListProps) {
  const [targetPoke, setTargetPoke] = useState(pokeList[0]);

  const handlePokeClick = (poke: Poke) => setTargetPoke(poke);
  return (
    <div>
      <div className="flex gap-x-1">
        {pokeList.map((poke) => (
          <button
            key={poke.name.ko}
            type="button"
            className="bg-blue-200 rounded-md"
            onClick={() => handlePokeClick(poke)}
          >
            {poke.name.ko}
          </button>
        ))}
      </div>
      <Information poke={targetPoke} />
      <PokeAbilities abilities={targetPoke.abilities} type={targetPoke.types[0]} />
      <PokeStats stats={targetPoke.stats} type={targetPoke.types[0]} />
      <PokeDefenseCompatibility types={targetPoke.types} />
    </div>
  );
}
