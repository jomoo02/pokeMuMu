import React from 'react';
import { PokeLinkWithParticleForAnd } from '@/app/components/poke-link';
import {
  TRADE_SPECEIS,
  type TradeSpeciesPoke,
} from '@/app/data/evolution-poke';

interface SpeciesProps {
  value: TradeSpeciesPoke;
}

function Species({
  value,
}: SpeciesProps) {
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

const ConditionTrade = {
  Species,
};

export default ConditionTrade;
