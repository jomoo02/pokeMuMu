import React from 'react';
import type { Move } from '@/app/models/detail.type';

interface CellNameProps {
  move: Move;
}

export default function CellName({
  move,
}: CellNameProps) {
  const moveName = move.move.name.ko;

  return (
    <div className="cell-name text-base font-semibold text-slate-700 px-2.5 flex items-center">
      {moveName}
    </div>
  );
}
