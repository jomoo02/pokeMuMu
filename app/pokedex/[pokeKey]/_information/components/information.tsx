import React from 'react';
import type { Poke } from '@/app/models/poke.type';
import Basic from './basic';

interface InformationProps {
  poke: Poke;
}

export default function Information({
  poke,
}: InformationProps) {
  return (
    <div className="px-2 2xl:px-10 pb-1 md:pb-4 grid xl:grid-cols-2 xl:gap-x-8 2xl:gap-x-14 gap-y-4 xl:min-h-[500px]">
      <Basic poke={poke} />
    </div>
  );
}
