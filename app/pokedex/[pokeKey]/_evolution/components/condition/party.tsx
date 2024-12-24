import React from 'react';
import type { ConditionValue } from '@/app/models/evolution.type';
import {
  PARTY_SPECIES,
  type PartySpeciesPoke,
} from '@/app/data/evolution-poke';
import { PokeLinkWithSubjectParticle } from '@/app/components/poke-link';
import {
  POKE_TYPE_LIST,
  type PokeType,
} from '@/app/data/poke-type';

interface PartyProps {
  value: ConditionValue;
}

const isPartySpecies = (v: string): v is PartySpeciesPoke => v in PARTY_SPECIES;

const isPokeType = (v: string): v is PokeType => v in POKE_TYPE_LIST;

function PartySpecies({
  value,
}: PartyProps) {
  if (typeof value === 'string' && isPartySpecies(value)) {
    const content = PARTY_SPECIES[value];

    return (
      <span>
        <PokeLinkWithSubjectParticle
          poke={value}
          content={content}
        />
        <span className="ml-1">있을 때</span>
      </span>
    );
  }

  return null;
}

function PartyType({
  value,
}: PartyProps) {
  if (typeof value === 'string' && isPokeType(value)) {
    const content = `${POKE_TYPE_LIST[value]} 타입 포켓몬을 지니고 있는 상태`;

    return <span>{content}</span>;
  }

  return null;
}

const ConditionParty = {
  Species: PartySpecies,
  Type: PartyType,
};

export default ConditionParty;
