import React from 'react';
import PokeInformationList from './_information';
import {
  getPokeList,
  getPokeEvolution,
  getPokeSurrounding,
} from './lib/get-poke';
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
    pokeEvolution,
    pokeNav,
  ] = await Promise.all([
    getPokeList(pokeKey),
    getPokeEvolution(pokeKey),
    getPokeSurrounding(pokeKey),
  ]);

  const { before, next } = pokeNav;

  const type = pokeList[0].types[0];

  return (
    <div>
      <PokeNavigation before={before} next={next} type={type} />
      <PokeInformationList pokeList={pokeList} />
      {pokeEvolution && (
        <PokeEvolution type={type} evolution={pokeEvolution} />
      )}
    </div>
  );
}
