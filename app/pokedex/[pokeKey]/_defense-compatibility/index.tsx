import React from 'react';
import type { PokeType } from '@/app/data/poke-type';
import Header from '../components/header';
import DefenseCompatibility from './components/defense-compatibility';

interface PokeDefenseCompatibilityProps {
  types: PokeType[];
}

export default function PokeDefenseCompatibility({
  types,
}: PokeDefenseCompatibilityProps) {
  return (
    <div>
      <Header
        text="방어 상성"
      />
      <div className="bg-white border-2 border-slate-500 rounded-lg">
        <DefenseCompatibility pokeTypes={types} />
      </div>
    </div>
  );
}
