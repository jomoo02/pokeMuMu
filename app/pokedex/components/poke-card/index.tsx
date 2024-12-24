import React from 'react';
import Link from 'next/link';
import PokeTypeBadge from '@/app/components/poke-type-badge';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import usePokeCard from '../../hooks/usePokeCard';
import StatList from './stat-list';
import PokeImg from './poke-img';

interface PokeCardProps {
  poke: PokedexPoke;
}

export default function PokeCard({
  poke,
}: PokeCardProps) {
  const {
    name,
    types,
    form,
    pokeKey,
    no,
    src,
    stats,
    handlePokeCardClick,
  } = usePokeCard(poke);

  return (
    <div className="flex items-stretch h-16 hover:bg-blue-100">
      <div className="min-w-[4rem] w-[4rem] xl:min-w-[4.5rem] xl:w-[4.5rem] px-2.5 flex items-center text-[13px] xl:text-sm text-slate-600 font-semibold">
        {`#${no}`}
      </div>
      <div className="grow px-2 flex">
        <div className="flex items-center px-2">
          <PokeImg src={src} alt={no} />
        </div>
        <div className="grid grow items-center px-3 xl:px-3.5">
          <div>
            <Link
              href={`/pokedex/${pokeKey}`}
              className="font-bold text-blue-800 leading-4 text-[15px] xl:text-base"
              onClick={handlePokeCardClick}
            >
              {name}
            </Link>
            {form && (
              <div className="text-xs lg:text-sm leading-4 font-semibold text-slate-500/90 capitalize">
                {form}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="min-w-24 w-24 px-2 flex flex-col gap-y-1 items-center justify-center">
        {types.map((type) => (
          <div key={type}>
            <PokeTypeBadge type={type} />
          </div>
        ))}
      </div>
      <div className="text-sm hidden md:flex items-center">
        <StatList stats={stats} />
      </div>
    </div>
  );
}
