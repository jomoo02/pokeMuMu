import React from 'react';
import type { Poke } from '@/app/models/poke.type';
import InformationBasic from './components/basic';
import InformationBreeding from './components/breeding';
import InformationDetail from './components/detail';

interface InformationProps {
  poke: Poke;
}

export default function Information({
  poke,
}: InformationProps) {
  return (
    <div className="px-2 2xl:px-10 pb-1 md:pb-4 grid xl:grid-cols-2 xl:gap-x-8 2xl:gap-x-14 gap-y-4 xl:min-h-[500px]">
      <InformationBasic poke={poke} />
      <div className="grid gap-y-4 gap-x-6 xl:gap-y-6">
        <InformationBreeding breeding={poke.breeding} />
        <InformationDetail detail={poke.detail} />
      </div>
    </div>
  );
}
