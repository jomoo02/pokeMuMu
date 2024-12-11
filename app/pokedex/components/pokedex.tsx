'use client';

import React, { useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import PokeCard from './poke-card';
import Loading from './poke-card/loading';
import usePokedex from '../hooks/usePokedex';
import PokedexHeader from './pokedex-header';

interface PokeCardListProps {
  pokeList: PokedexPoke[];
}

export default function PokeCardList({ pokeList }: PokeCardListProps) {
  const momoedPokes = useMemo(() => pokeList, []);

  const { isLoading } = usePokedex();

  const itemContent = (index: number, poke: PokedexPoke) => (
    <div className="border-b">
      {isLoading ? <Loading /> : <PokeCard poke={poke} />}
    </div>
  );

  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <PokedexHeader />
      <Virtuoso
        useWindowScroll
        data={momoedPokes}
        totalCount={momoedPokes.length}
        itemContent={itemContent}
        className="w-full sm:w-[420px] md:w-[520px] lg:w-[920px] xl:w-[1100px]"
      />
    </div>
  );
}
