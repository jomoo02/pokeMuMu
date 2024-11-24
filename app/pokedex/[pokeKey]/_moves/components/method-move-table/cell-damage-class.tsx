import React from 'react';
import DamageClassBadge from '@/app/components/damage-class-badge';
import type { Move } from '@/app/models/detail.type';

interface CellDamageClassProps {
  move: Move;
}

export default function CellDamageClass({
  move,
}: CellDamageClassProps) {
  return (
    <div
      key="damage-class"
      className="cell-damage-class flex justify-center items-center"
    >
      <DamageClassBadge damageClass={move.move.damage_class} />
    </div>
  );
}
