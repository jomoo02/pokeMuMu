import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PokeTypeBadge from '@/app/components/poke-type-badge';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import useSearchResultPoke from '../hooks/useSearchResultPoke';
import { getPokeInfo } from '../lib/search-result-poke';

interface SearchResultPokeProps {
  poke: PokedexPoke;
}

export default function SearchResultPoke({
  poke,
}: SearchResultPokeProps) {
  const {
    saveResultPokeOnEnter,
    saveResultPokeOnClick,
  } = useSearchResultPoke(poke);

  const {
    pokeKey,
    types,
    nameEn,
    nameKo,
    form,
    src,
    no,
  } = getPokeInfo(poke);

  const handleOnClick = () => saveResultPokeOnClick();

  const handleOnEnter = (e: React.KeyboardEvent) => saveResultPokeOnEnter(e);

  return (
    <Link
      href={`/pokedex/${pokeKey}`}
      onClick={handleOnClick}
      onKeyDown={handleOnEnter}
      prefetch
    >
      <div className="flex w-full h-full items-center overflow-hidden gap-x-3 px-1.5 xs:px-2.5 lg:px-3">
        <div className="text-slate-700">
          {no}
        </div>
        <div className="relative w-[50px] h-[50px] lg:w-[55px] lg:h-[55px] mx-1 lg:mx-2 flex-shrink-0">
          <Image
            src={src}
            alt={nameEn}
            fill
            sizes="40px"
            style={{
              objectFit: 'contain',
            }}
            priority
          />
        </div>
        <div className="overflow-hidden flex flex-1 flex-col justify-center">
          <div className="truncate leading-[18px]">
            {nameKo}
          </div>
          <div className="truncate text-[13px] lg:text-[14px] leading-[18px]">
            {nameEn}
          </div>
          <div className="text-xs lg:text-[12.5px] lg:leading-5 text-slate-500 truncate">
            {form}
          </div>
        </div>
        <div className="flex flex-col gap-y-1 items-center lg:gap-y-1.5">
          {types.map((type) => (
            <PokeTypeBadge type={type} key={type} />
          ))}
        </div>
      </div>
    </Link>
  );
}
