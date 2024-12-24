import React from 'react';
import type { Ability } from '@/app/models/pokev4.type';
import Header from '../components/header';
import PokeAbility from './components/ability';

interface PokeAbilitiesProps {
  abilities: Ability[];
}

export default function PokeAbilities({
  abilities,
}: PokeAbilitiesProps) {
  if (!abilities || abilities.length === 0) {
    return null;
  }

  return (
    <div>
      <Header text="특성" />
      <div className="grid divide-y border-2 border-slate-500 rounded-lg divide-slate-400">
        {abilities.map(({ name, isHidden, flavorText }) => (
          <PokeAbility
            key={name}
            name={name}
            isHidden={isHidden}
            flavorText={flavorText}
          />
        ))}
      </div>
    </div>
  );
}
