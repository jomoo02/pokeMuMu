'use client';

import React from 'react';
import type { Poke } from '@/app/models/pokev4.type';
import PokeListGroup from './poke-list-group';
import PokeAbilities from '../_abilities';
import PokeStats from '../_stats';
import PokeDefenseCompatibility from '../_defense-compatibility';
import usePokeList from '../hooks/usePokeList';
import PokeMoves from '../_moves';
import PokeInformation from '../_information';
import PokeIdentifier from './poke-identifier';

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
    <div className="grid gap-y-6 md:gap-y-10">
      <PokeIdentifier
        name={pokeList[0].name}
        no={pokeList[0].no}
      />
      <div className="grid gap-y-3">
        <PokeListGroup
          pokeList={pokeList}
          targetPoke={targetPoke}
          onClickPoke={handleTargetPoke}
        />
        <PokeInformation poke={targetPoke} />
      </div>
      <PokeAbilities abilities={targetPoke.abilities} />
      <PokeStats stats={targetPoke.stats} />
      <PokeDefenseCompatibility types={targetPoke.types} />
      {children}
      <PokeMoves moves={targetPoke.moves} order={targetPoke.order} />
    </div>
  );
}
