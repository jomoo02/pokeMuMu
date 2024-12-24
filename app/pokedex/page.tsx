import React from 'react';
import { getPokedexPokeList } from './lib/get-pokedex-poke';
import Pokedex from './components/pokedex';

export const revalidate = 3600;

export default async function Page() {
  const pokeList = await getPokedexPokeList();

  if (!pokeList) {
    return null;
  }

  return (
    <div className="font-pretendard">
      <h2>Pokedex page</h2>
      <Pokedex pokeList={pokeList} />
    </div>
  );
}
