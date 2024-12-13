import React from 'react';
import Image from 'next/image';
import type { ChainItem } from '@/app/models/evolution.type';
import { useChainMaxWidth } from './chain.context';
import ChainPokeDetail from './chain-poke-info';
import ChainPokeLink from './chain-poke-link';

export default function ChainPoke({
  chainPoke,
}: {
  chainPoke: ChainItem,
}) {
  const {
    pokeKey,
    id,
    detail,
    name,
  } = chainPoke;

  const maxWidth = useChainMaxWidth();

  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className={`flex flex-col justify-center items-center ${maxWidth === 8 ? '' : 'md:flex-row'}`}>
      <ChainPokeDetail detail={detail} />
      <div className="min-w-20 max-w-24 xs:w-24 md:w-24 flex flex-col items-center justify-center py-4">
        <div className="w-16 h-16 md:w-20 relative md:h-20">
          <Image
            src={src}
            alt={name.en}
            fill
            sizes="70px"
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
        <ChainPokeLink pokeKey={pokeKey} name={name} />
      </div>
    </div>
  );
}
