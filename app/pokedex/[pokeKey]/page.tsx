import React from 'react';
import Information from './_information';
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
      {pokeList.map((poke) => <Information key={`${poke.name}-${poke.form}`} poke={poke} />)}
    </div>
  );
}
