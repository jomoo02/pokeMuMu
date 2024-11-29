import React from 'react';
import PokeInformationList from './_information';
import {
  getPokeList,
  getPokeDetail,
} from './utils/get-poke';
import PokeMoves from './_moves';

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
  ] = await Promise.all([
    getPokeList(pokeKey),
    getPokeDetail(pokeKey),
  ]);

  return (
    <div>
      <PokeInformationList pokeList={pokeList} />
      <div>{pokeDetail?.speciesName.ko}</div>
      {pokeDetail && (
        <PokeMoves moves={pokeDetail?.moves} type='normal' />
      )}
    </div>
  );
}
