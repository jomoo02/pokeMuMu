import React from 'react';
import {
  PARTY_SPECIES,
  type PartySpeciesPoke,
} from '@/app/data/evolution-poke';
import { PokeLinkWithSubjectParticle } from '@/app/components/poke-link';
import {
  POKE_TYPE_LIST,
  type PokeType,
} from '@/app/data/poke-type';

interface PartySpeciesProps {
  value: PartySpeciesPoke;
}

interface PartyTypeProps {
  value: PokeType;
}

function PartySpecies({
  value,
}: PartySpeciesProps) {
  const pokeContent = PARTY_SPECIES[value];

  return (
    <span>
      <PokeLinkWithSubjectParticle
        poke={value}
        content={pokeContent}
      />
      <span className="ml-1">있을 때</span>
    </span>
  );
}

function PartyType({
  value,
}: PartyTypeProps) {
  const type = POKE_TYPE_LIST[value];
  const content = `${type} 타입 포켓몬을 지니고 있는 상태`;

  return <span>{content}</span>;
}

const ConditionParty = {
  Species: PartySpecies,
  Type: PartyType,
};

export default ConditionParty;
