import React from 'react';
import { PokeType } from '@/app/data/poke-type';

interface HeaderProps {
  type: PokeType;
  text: string;
}

export default function Header({
  type = 'normal',
  text = '',
}: HeaderProps) {
  return (
    <div className={`${type} rounded-t-md`}>
      <h2 className="text-white text-center font-semibold py-[3px] md:py-1 text-sm lg:text-base">
        {text}
      </h2>
    </div>
  );
}
