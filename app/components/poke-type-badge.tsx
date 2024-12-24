import React from 'react';
import {
  POKE_TYPE_LIST,
  DEFAULT_POKE_TYPE,
  type PokeType,
} from '@/app/data/poke-type';

interface PokeTypeBadgeProps {
  type: PokeType;
  width?: string;
}

export default function PokeTypeBadge({
  type = DEFAULT_POKE_TYPE,
  width = 'w-[60px] xs:w-[63px]',
}: PokeTypeBadgeProps) {
  const typeText = POKE_TYPE_LIST[type];

  return (
    <div
      className={
        `${width} leading-[22px] xs:leading-[23px] h-[25px] px-px font-medium text-sm text-center rounded-[5px] border border-zinc-700/80 text-white ${type} type-text shrink-0`
      }
    >
      {typeText}
    </div>
  );
}
