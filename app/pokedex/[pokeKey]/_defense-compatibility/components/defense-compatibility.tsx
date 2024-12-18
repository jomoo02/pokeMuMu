import React from 'react';
import PokeTypeBadge from '@/app/components/poke-type-badge';
import type { PokeType } from '@/app/data/poke-type';
import { formatDefenseCompatibility } from '../lib/defense-compatibility';
import DamageRate from './damage-rate';

interface DefenseCompatibilityProps {
  pokeTypes: PokeType[]
}

export default function DefenseCompatibility({
  pokeTypes,
}: DefenseCompatibilityProps) {
  const targetDfCompatibility = formatDefenseCompatibility(pokeTypes);

  return (
    <>
      <div className="flex py-1 md:py-1.5 justify-center items-center gap-x-2.5 border-b border-slate-400">
        <div className="flex gap-x-2">
          {pokeTypes.map((type) => <PokeTypeBadge key={type} type={type} />)}
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row">
        {targetDfCompatibility.map(({ damageRate, types }) => (
          <div
            key={damageRate}
            className={`flex gap-x-2 md:flex-col border-b md:border-b-0 py-1.5 md:py-0 md:border-r border-slate-400 last:border-0 ${types.length > 4 ? 'flex-auto' : ''}`}
          >
            <DamageRate
              damageRate={damageRate}
              types={types}
            />
          </div>
        ))}
      </div>
    </>
  );
}
