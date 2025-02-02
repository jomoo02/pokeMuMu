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
    <div className="flex gap-x-3 items-center">
      <div className="flex gap-x-1.5 justify-center">
        <span className="text-slate-700">
          {`#${no}`}
        </span>
        <span>
          {name}
        </span>
      </div>
    </div>
  );
}
