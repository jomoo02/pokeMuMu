import React from 'react';
import PokeTypeBadge from '@/app/components/poke-type-badge';
import type { Poke } from '@/app/models/pokev4.type';
import { classifyPokedexNumber } from '../lib/basic';
import InfoItem from './info-item';
import InfoTitle from './info-title';

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
      <InfoTitle title="기본 정보" />
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
          {types.map((type) => <PokeTypeBadge key={type} type={type} />)}
        </div>
      </InfoItem>
      <InfoItem subject="지역도감">
        <div className="grid gap-y-1.5 sm:gap-y-1">
          {localNoList.map(({ pokedex, entryNumber }) => (
            <div key={pokedex} className="flex">
              <span className="min-w-11 max-w-11 sm:min-w-12 sm:max-w-12 flex items-center text-slate-600 text-sm sm:text-[15px]">
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
