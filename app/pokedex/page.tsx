import React from 'react';
import './styles/pokedex.css';
import { getPokeList } from './utils/get-poke';
import PokeCardList from './components/poke-card-list';

export default async function Page() {
  const pokeList = await getPokeList();

  if (!pokeList) {
    return null;
  }

  return (
    <div className="font-pretendard">
      <h2>Pokedex page</h2>
      <PokeCardList pokeList={pokeList} />
    </div>
  );
}
