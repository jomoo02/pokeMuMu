'use client';

import React, { useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import type { CardPoke } from '@/app/models/poke.type';
import PokeCard from './poke-card';
import usePokeCardList from '../hooks/usePokeCardList';

interface PokeCardListProps {
  pokeList: CardPoke[];
}

function Ske() {
  return (
    <div className="w-pokedex h-16 bg-slate-50 border-b animate-pulse" />
  );
}

export default function PokeCardList({ pokeList }: PokeCardListProps) {
  const momoedPokes = useMemo(() => pokeList, []);

  const { isLoading } = usePokeCardList();

  const itemContent = (index: number, poke: CardPoke) => (
    <div className="border-b">
      {isLoading ? <Ske /> : <PokeCard poke={poke} />}
    </div>
  );

  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      {/* <ListHeader /> */}
      <Virtuoso
        useWindowScroll
        data={momoedPokes}
        totalCount={momoedPokes.length}
        itemContent={itemContent}
        className="w-pokedex"
      />
    </div>
  );
}
