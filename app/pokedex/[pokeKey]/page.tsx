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

  const type = pokeList[0].types[0];

  return (
    <div>
      <PokeInformationList pokeList={pokeList} />
      {pokeDetail && (
        <PokeMoves moves={pokeDetail?.moves} type={type} />
      )}
    </div>
  );
}
