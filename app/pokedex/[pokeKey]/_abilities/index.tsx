import React from 'react';
import type { Ability } from '@/app/models/poke.type';
import type { PokeType } from '@/app/data/poke-type';
import Header from '../components/header';
import PokeAbility from './components/ability';

interface PokeAbilitiesProps {
  abilities: Ability[];
  type: PokeType
}

export default function PokeAbilities({
  abilities,
  type,
}: PokeAbilitiesProps) {
  if (!abilities || abilities.length === 0) {
    return null;
  }

  return (
    <div>
      <Header
        type={type}
        text="특성"
      />
      <div className={`grid divide-y border-2 border-t-0 ${type}-border rounded-b-sm`}>
        {abilities.map((ability) => (
          <PokeAbility
            key={ability.name}
            ability={ability}
          />
        ))}
      </div>
    </div>
  );
}
