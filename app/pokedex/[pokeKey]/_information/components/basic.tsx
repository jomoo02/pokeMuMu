import React from 'react';
import PokeTypeCard from '@/app/components/poke-type-card';
import type { Poke } from '@/app/models/poke.type';
import { classifyPokedexNumber } from '../utils/baisc';
import InfoItem from './info-item';

interface BasicProps {
  poke: Poke;
}

export default function InformationBasic({
  poke,
}: BasicProps) {
  const {
    name,
    pokedexNumbers,
    types,
    form,
  } = poke;

  const {
    nationalNo,
    localNoList,
  } = classifyPokedexNumber(pokedexNumbers);

  return (
    <div>
      <h3>기본 정보</h3>
      <InfoItem
        subject="전국도감"
        content={nationalNo}
      />
      <InfoItem
        subject="이름"
        content={name.ko}
      />
      <InfoItem
        subject="모습"
        content={form}
      />
      <InfoItem subject="타입">
        <div className="flex gap-x-2">
          {types.map((type) => <PokeTypeCard key={type} type={type} />)}
        </div>
      </InfoItem>
      <InfoItem subject="지역도감">
        <div className="grid gap-y-1.5 sm:gap-y-1">
          {localNoList.map(({ pokedex, entryNumber }) => (
            <div key={pokedex} className="flex info-content">
              <span className="min-w-11 max-w-11 sm:min-w-12 sm:max-w-12 flex items-center">
                {entryNumber}
              </span>
              <span className="text-xs sm:text-sm text-slate-500/90 flex items-center">
                {`(${pokedex})`}
              </span>
            </div>
          ))}
        </div>
      </InfoItem>
    </div>
  );
}
