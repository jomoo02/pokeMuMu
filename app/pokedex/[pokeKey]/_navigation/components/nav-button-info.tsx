import React from 'react';
import type { NavPoke } from '@/app/models/pokev4.type';
import { formatNavButtonInfo } from '../lib/nav-button-info';

interface NavButtonInfoProps {
  poke: NavPoke;
}

export default function NavButtonInfo({
  poke,
}: NavButtonInfoProps) {
  const {
    name,
    no,
  } = formatNavButtonInfo(poke);

  return (
    <div className="flex justify-center gap-x-3">
      <div className="flex flex-col justify-center items-center text-sm py-1 font-semibold">
        <div className="flex gap-x-1.5 items-center">
          <span className="capitalize text-slate-500 text-sm">
            {`#${no}`}
          </span>
          <span className="text-center text-slate-600/90 text-[15px]">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}
