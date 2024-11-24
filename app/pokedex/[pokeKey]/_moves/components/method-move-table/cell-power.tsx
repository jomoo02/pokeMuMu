import React from 'react';
import type { Move } from '@/app/models/detail.type';

interface CellPowerProps {
  move: Move
}

export default function CellPower({
  move,
}: CellPowerProps) {
  return (
    <div
      key="power"
      className="text-sm font-medium px-3 cell-pokwer flex items-center justify-end"
    >
      {move.move.power || '—'}
    </div>
  );
}
