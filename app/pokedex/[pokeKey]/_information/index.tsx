import React from 'react';
import Image from 'next/image';
import type { Poke } from '@/app/models/pokev4.type';
import InformationBasic from './components/basic';
import InformationBreeding from './components/breeding';
import InformationDetail from './components/detail';

interface PokeInformationProps {
  poke: Poke;
}

export default function PokeInformation({
  poke,
}: PokeInformationProps) {
  const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const src = `${baseUrl}/${poke.id}.png`;
  // const src = '/pokeball.svg';

  return (
    <div className="border-slate-500 border-2 rounded-lg flex flex-col xl:flex-row bg-white">
      <div className="flex justify-center items-center py-3 sm:py-5 lg:py-6 xl:py-0 xl:w-1/3">
        <Image
          src={src}
          alt={poke.name.ko}
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="flex flex-col xl:flex-1 xl:py-4 px-2 xl:px-4 2xl:px-10 xl:w-2/3">
        <div className="pb-1 md:pb-4 flex flex-col xl:flex-row xl:gap-x-8 2xl:gap-x-14 gap-y-4 xl:min-h-[500px]">
          <InformationBasic
            poke={poke}
            className="basis-1/2"
          />
          <div className="flex flex-col gap-y-4 xl:gap-y-6 basis-1/2">
            <InformationDetail detail={poke.detail} />
            <InformationBreeding breeding={poke.breeding} />
          </div>
        </div>
      </div>
    </div>
  );
}
