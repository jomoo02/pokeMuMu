import React from 'react';
import {
  getPokeList,
  getSurroundingPoke,
  getEvolution,
} from './lib/get-poke';
import PokeList from './components/poke-list';
import PokeNavigation from './_navigation';
import PokeEvolution from './_evolution';

interface PageProps {
  params: {
    pokeKey: string;
  };
}

export default async function Page({
  params,
}: PageProps) {
  const { pokeKey } = params;

  const [
    pokeList,
    surroundingPoke,
    pokeEvolution,
  ] = await Promise.all([
    getPokeList(pokeKey),
    getSurroundingPoke(pokeKey),
    getEvolution(pokeKey),
  ]);

  const {
    before,
    next,
  } = surroundingPoke;

  return (
    <div className="grid gap-y-6 md:gap-y-10">
      <PokeNavigation before={before} next={next} />
      <PokeList pokeList={pokeList}>
        <PokeEvolution evolution={pokeEvolution} />
      </PokeList>
    </div>
  );
}
