import React from 'react';
import {
  POKE_TYPE_LIST,
  type PokeType,
} from '@/app/data/poke-type';

interface PokeTypeCardProps {
  type: PokeType;
  width?: string;
}

export default function PokeTypeCard({
  type,
  width = 'w-[60px] xs:w-[63px]',
}: PokeTypeCardProps) {
  const typeText = POKE_TYPE_LIST[type];

  return (
    <div
      className={
        `${width} leading-[22px] xs:leading-[23px] px-px font-medium text-sm text-center rounded-[5px] border border-zinc-700/80 text-white ${type} type-text capitalize`
      }
    >
      {typeText}
    </div>
  );
}
