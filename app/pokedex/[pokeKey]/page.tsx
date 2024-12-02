import React from 'react';
import PokeInformationList from './_information';
import {
  getPokeList,
  getPokeDetail,
  getPokeEvolution,
} from './utils/get-poke';
import PokeMoves from './_moves';
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
    pokeDetail,
    pokeEvolution,
  ] = await Promise.all([
    getPokeList(pokeKey),
    getPokeDetail(pokeKey),
    getPokeEvolution(pokeKey),
  ]);

  const type = pokeList[0].types[0];

  return (
    <div>
      <PokeInformationList pokeList={pokeList} />
      {pokeEvolution && (
        <PokeEvolution type={type} evolution={pokeEvolution} />
      )}
      {pokeDetail && (
        <PokeMoves moves={pokeDetail?.moves} type={type} />
      )}
    </div>
  );
}
