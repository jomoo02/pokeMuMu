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
    <h1 className="text-2xl text-slate-700 flex gap-x-1.5 justify-center">
      <span className="font-medium">
        {formattedNo}
      </span>
      <span className="font-bold">
        {localeName}
      </span>
    </h1>
  );
}
