import React from 'react';
import PokeTypeBadge from '@/app/components/poke-type-badge';
import type { PokeType } from '@/app/data/poke-type';
import { formatDefenseCompatibility } from '../utils/defense-compatibility';
import DamageRate from './damage-rate';

interface DefenseCompatibilityProps {
  pokeTypes: PokeType[]
}

export default function DefenseCompatibility({
  pokeTypes,
}: DefenseCompatibilityProps) {
  const mainType = pokeTypes[0];

  const targetDfCompatibility = formatDefenseCompatibility(pokeTypes);

  return (
    <div className={`border-2 border-t-0 ${mainType}-border rounded-b-sm`}>
      <div className={`flex py-1 md:py-1.5 justify-center items-center gap-x-2.5 border-b-2 ${mainType}-border`}>
        <div className="flex gap-x-2">
          {pokeTypes.map((type) => <PokeTypeBadge key={type} type={type} />)}
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row">
        {targetDfCompatibility.map(({ damageRate, types }) => (
          <div
            key={damageRate}
            className={`flex gap-x-2 md:flex-col border-b last:border-b-0 md:border-b-0 py-1.5 md:py-0 md:border-r ${types.length > 4 ? 'flex-auto' : ''}`}
          >
            <DamageRate
              damageRate={damageRate}
              types={types}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
