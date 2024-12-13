import React from 'react';
import type { Evolution } from '@/app/models/evolution.type';
import Header from '../components/header';
import Area from './components/area';
import PokeChain from './components/chain';

interface PokeEvolutionProps {
  evolution: Evolution | null;
}

export default function PokeEvolution({
  evolution,
}: PokeEvolutionProps) {
  if (!evolution) {
    return null;
  }

  const {
    id,
  } = evolution;

  return (
    <div>
      <Header
        text="진화"
      />
      <div className="border-2 border-t-0 rounded-b-sm">
        <PokeChain evolution={evolution} />
        <Area id={id} />
      </div>
    </div>
  );
}
