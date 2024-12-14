'use client';

import React from 'react';
import type { Poke } from '@/app/models/pokev4.type';
import PokeAbilities from '../_abilities';
import PokeStats from '../_stats';
import PokeDefenseCompatibility from '../_defense-compatibility';
import usePokeList from '../hooks/usePokeList';
import PokeMoves from '../_moves';

interface PokeListProps {
  pokeList: Poke[];
  children?: React.ReactNode;
}

export default function PokeList({
  pokeList,
  children,
}: PokeListProps) {
  const {
    targetPoke,
    handleTargetPoke,
  } = usePokeList(pokeList);

  return (
    <div>
      <PokeAbilities abilities={targetPoke.abilities} />
      <PokeStats stats={targetPoke.stats} />
      <PokeDefenseCompatibility types={targetPoke.types} />
      {children}
      <PokeMoves moves={targetPoke.moves} />
    </div>
  );
}
