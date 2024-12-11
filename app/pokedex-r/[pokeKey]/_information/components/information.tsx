import React from 'react';
import Image from 'next/image';
import type { Poke } from '@/app/models/pokev4.type';
import InformationBasic from './basic';
import InformationBreeding from './breeding';
import InformationDetail from './detail';
import Header from '../../components/header';

interface InformationProps {
  poke: Poke;
}

export default function Information({
  poke,
}: InformationProps) {
  const type = poke.types[0];

  const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const src = `${baseUrl}/${poke.id}.png`;

  return (
    <div>
      <Header text="정보" type={type} />
      <div className={`border-2 border-t-0 ${type}-border  grid xl:grid-cols-3 items-center`}>
        <div>
          <div className="flex justify-center items-center py-3 md:py-0">
            {/* <Image
              src={src}
              alt={poke.name.ko}
              width={200}
              height={200}
              priority
            /> */}
          </div>
        </div>
        <div className="xl:col-span-2 xl:py-4">
          <div className="px-2 2xl:px-10 pb-1 md:pb-4 grid xl:grid-cols-2 xl:gap-x-8 2xl:gap-x-14 gap-y-4 xl:min-h-[500px]">
            <InformationBasic poke={poke} />
            <div className="grid gap-y-4 gap-x-6 xl:gap-y-6">
              <InformationDetail detail={poke.detail} />
              <InformationBreeding breeding={poke.breeding} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
