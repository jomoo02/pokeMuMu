import React from 'react';
import Link from 'next/link';
import { getPokeLinkName } from '../../lib/poke-link';

interface ChainPokeLinkProps {
  pokeKey: string;
  name: {
    en: string;
    ko: string;
  };
}

export default function ChainPokeLink({
  pokeKey,
  name,
}: ChainPokeLinkProps) {
  const [mainName, subName] = getPokeLinkName(name.ko);

  return (
    <Link
      href={`/pokedex/${pokeKey}`}
      className="text-center min-h-10 max-h-20 flex flex-col underline underline-offset-2 hover:text-blue-400"
      prefetch
    >
      <span className="text-sm md:text-[15px]">
        {mainName}
      </span>
      {subName && (
        <span className="text-xs">
          {subName}
        </span>
      )}
    </Link>
  );
}
