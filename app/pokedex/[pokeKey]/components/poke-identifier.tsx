import React from 'react';
import { formatPokedexNumber } from '@/app/utils/pokedex-number';

interface PokeIdentifierProps {
  name: {
    ko: string;
  };
  no: number;
}

export default function PokeIdentifier({
  name,
  no,
}: PokeIdentifierProps) {
  const localeName = name.ko;
  const formattedNo = formatPokedexNumber(no);

  return (
    <h1 className="text-2xl lg:text-3xl text-slate-800 flex gap-x-1.5 justify-center my-3">
      <span className="font-bold">
        {formattedNo}
      </span>
      <span className="font-extrabold">
        {localeName}
      </span>
    </h1>
  );
}
