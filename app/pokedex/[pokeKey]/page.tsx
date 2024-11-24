import React from 'react';
import PokeInformationList from './_information';
import {
  getPokeList,
  getPokeDetail,
} from './utils/get-poke';

interface PageProps {
  params: {
    pokeKey: string;
  };
}

export default async function Page({
  params,
}: PageProps) {
  const { pokeKey } = params;

  // const pokeList = await getPokeList(pokeKey);

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
    </div>
  );
}
