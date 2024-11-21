'use client';

import React, { memo, useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import type { Poke } from '@/app/models/poke.type';
import PokeCard from './poke-card';
import usePokeCardList from '../hooks/usePokeCardList';
import PokeCardListHeader from './poke-card-list-header';

interface PokeCardListProps {
  pokeList: Poke[];
}

function Ske() {
  return (
    <div className="w-pokedex h-16 bg-slate-50 border-b animate-pulse" />
  );
}

function PokeCardList({ pokeList }: PokeCardListProps) {
  // const momoedPokes = useMemo(() => pokeList, []);

  // const { isLoading } = usePokeCardList();

  // const itemContent = (index: number, poke: Poke) => (
  //   <div className="border-b">
  //     {isLoading ? <Ske /> : <PokeCard poke={poke} />}
  //   </div>
  // );

  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <PokeCardListHeader />
      <div className="w-pokedex">
        {pokeList.map((poke) => <PokeCard key={`${poke.name}-${poke.form}-${poke.id}-${poke.order}`} poke={poke} />)}
      </div>

      {/* <Virtuoso
        useWindowScroll
        data={momoedPokes}
        totalCount={momoedPokes.length}
        itemContent={itemContent}
        className="w-pokedex"
      /> */}
    </div>
  );
}

const MemoedPokeCardList = memo(PokeCardList);

export default MemoedPokeCardList;