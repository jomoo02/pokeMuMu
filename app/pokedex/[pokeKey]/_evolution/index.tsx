import React from 'react';
import type { PokeType } from '@/app/data/poke-type';
import type { Evolution } from '@/app/models/evolution.type';
import Header from '../components/header';
import AreaList from './components/area-list';

interface PokeEvolutionProps {
  type: PokeType;
  evolution: Evolution;
}

export default function PokeEvolution({
  type,
  evolution,
}: PokeEvolutionProps) {
  const {
    id,
    ...chain
  } = evolution;

  return (
    <div>
      <Header
        type={type}
        text="진화"
      />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        {/* <PokeChain chainObj={pokeEvolutionChain} /> */}
        <AreaList id={id} type={type} />
      </div>
    </div>
  );
}
