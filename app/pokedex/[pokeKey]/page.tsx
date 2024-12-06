import React from 'react';
import PokeInformationList from './_information';
import {
  getPokeList,
  getPokeDetail,
  getPokeEvolution,
  getPokeSurrounding,
} from './utils/get-poke';
import PokeMoves from './_moves';
import PokeEvolution from './_evolution';
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
    pokeDetail,
    pokeEvolution,
  ] = await Promise.all([
    getPokeList(pokeKey),
    getPokeDetail(pokeKey),
    getPokeEvolution(pokeKey),
  ]);

  const orderList = pokeList.map(({ order }) => order).sort((a, b) => a - b);

  const { before, next } = await getPokeSurrounding(
    pokeKey,
    orderList[0],
  );

  const type = pokeList[0].types[0];

  return (
    <div>
      <PokeNavigation before={before} next={next} type={type} />
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
