import React from 'react';
import './styles/pokedex.css';
import { getPokeList } from './utils/get-poke';
import MemoedPokeCardList from './components/poke-card-list';

export const revalidate = 3600;

export default async function Page() {
  const pokeList = await getPokeList();

  if (!pokeList) {
    return null;
  }

  return (
    <div className="font-pretendard">
      <h2>Pokedex page</h2>
      <MemoedPokeCardList pokeList={pokeList} />
    </div>
  );
}
