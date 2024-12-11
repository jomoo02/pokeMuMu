import React from 'react';
import {
  getPokeList,
  getSurroundingPoke,
} from './lib/get-poke';
import PokeList from './components/poke-list';
import PokeNavigation from './_navigation';

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
  ] = await Promise.all([
    getPokeList(pokeKey),
    getSurroundingPoke(pokeKey),
  ]);

  const {
    before,
    next,
  } = surroundingPoke;

  return (
    <div>
      <PokeNavigation before={before} next={next} />
      <PokeList pokeList={pokeList} />
    </div>
  );
}
