import React from 'react';
import type { Move } from '@/app/models/detail.type';

interface CellAccuracyProps {
  move: Move;
}

export default function CellAccuracy({
  move,
}: CellAccuracyProps) {
  return (
    <div
      key="accuracy"
      className="text-sm font-medium px-3 cell-accuracy flex items-center justify-end"
    >
      {move.move.accuracy || '—'}
    </div>
  );
}
