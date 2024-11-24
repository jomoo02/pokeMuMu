import React from 'react';
import type { Move } from '@/app/models/detail.type';

interface CellLevelProps {
  move: Move;
}

export default function CellLevel({
  move,
}: CellLevelProps) {
  return (
    <div
      key="level"
      className="level-cell text-sm px-2 font-medium flex items-center"
    >
      {move.level}
    </div>
  );
}
