import React from 'react';
import PokeInformationList from './_information';
import { getPokeList } from './utils/get-poke';

interface PageProps {
  params: {
    pokeKey: string;
  };
}

export default async function Page({
  params,
}: PageProps) {
  const { pokeKey } = params;

  const pokeList = await getPokeList(pokeKey);

  return (
    <div>
      <PokeInformationList pokeList={pokeList} />
    </div>
  );
}
