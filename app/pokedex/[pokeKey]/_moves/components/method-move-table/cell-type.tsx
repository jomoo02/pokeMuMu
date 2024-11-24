import React from 'react';
import type { Move } from '@/app/models/detail.type';
import PokeTypeBadge from '@/app/components/poke-type-badge';

interface CellTypeProps {
  move: Move;
}

export default function CellType({
  move,
}: CellTypeProps) {
  return (
    <div
      key="type"
      className="cell-type flex justify-center items-center"
    >
      <PokeTypeBadge type={move.move.type} />
    </div>
  );
}
