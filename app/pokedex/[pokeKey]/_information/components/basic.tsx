import React from 'react';
import PokeTypeBadge from '@/app/components/poke-type-badge';
import type { Poke } from '@/app/models/pokev4.type';
import { classifyPokedexNumber } from '../lib/basic';
import InfoItem from './info-item';
import InfoTitle from './info-title';

interface BasicProps {
  poke: Poke;
  className?: string;
}

export default function InformationBasic({
  poke,
  className,
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
    <div className={className}>
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
        <div className="flex flex-col gap-y-1.5 sm:gap-y-1 ">
          {localNoList.map(({ pokedex, entryNumber }) => (
            <div
              key={pokedex}
              className="flex items-center overflow-hidden"
            >
              <span className="truncate min-w-10 sm:min-w-12 max-w-10 sm:max-w-12">
                {entryNumber}
              </span>
              <span className="truncate text-xs lg:text-sm text-slate-500 flex-1">
                {`(${pokedex})`}
              </span>
            </div>
          ))}
        </div>
      </InfoItem>

    </div>
  );
}
