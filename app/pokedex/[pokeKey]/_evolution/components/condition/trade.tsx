import React from 'react';
import { PokeLinkWithParticleForAnd } from '@/app/components/poke-link';
import {
  TRADE_SPECEIS,
  type TradeSpeciesPoke,
} from '@/app/data/evolution-poke';
import type { ConditionValue } from '@/app/models/evolution.type';

interface SpeciesProps {
  value: ConditionValue;
}

const isSpecies = (v: string): v is TradeSpeciesPoke => v in TRADE_SPECEIS;

function Species({
  value,
}: SpeciesProps) {
  if (typeof value === 'string' && isSpecies(value)) {
    const content = TRADE_SPECEIS[value];

    return (
      <span>
        <PokeLinkWithParticleForAnd
          poke={value}
          content={content}
        />
      </span>
    );
  }

  return null;
}

const ConditionTrade = {
  Species,
};

export default ConditionTrade;
