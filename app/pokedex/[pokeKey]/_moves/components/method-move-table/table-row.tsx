import React from 'react';
import type { Move, MoveMethod } from '@/app/models/pokev4.type';
import DamageClassBadge from '@/app/components/damage-class-badge';
import PokeTypeBadge from '@/app/components/poke-type-badge';
import CellPrePoke from './cell-pre-poke';
import CellMachine from './cell-machine';

interface TableRowProps {
  moveMethod: MoveMethod;
  move: Move;
}

function FirstCell({
  move,
  moveMethod,
}: TableRowProps) {
  if (moveMethod === 'level-up') {
    return (
      <td className="px-2 border border-slate-400">
        {move.level}
      </td>
    );
  } if (moveMethod === 'pre') {
    return (
      <td className="border border-slate-400">
        <CellPrePoke move={move} />
      </td>
    );
  } if (['tm', 'tr', 'hm'].includes(moveMethod)) {
    return (
      <td className="px-2 border border-slate-400">
        <CellMachine move={move} />
      </td>
    );
  }
  return null;
}

export default function TableRow({
  move,
  moveMethod,
}: TableRowProps) {
  const name = move.name.ko;
  const damageClass = move.damage_class;
  const { power, type, accuracy } = move;

  return (
    <tr className="h-9">
      <FirstCell moveMethod={moveMethod} move={move} />
      <td className="px-1.5 border border-slate-400 text-nowrap font-semibold">
        {name}
      </td>
      <td align="center" className="border border-slate-400">
        <PokeTypeBadge type={type} />
      </td>
      <td align="center" className="border border-slate-400">
        <DamageClassBadge damageClass={damageClass} />
      </td>
      <td align="right" className="border border-slate-400 px-2">
        {power || '—'}
      </td>
      <td align="right" className="border border-slate-400 px-2">
        {accuracy || '—'}
      </td>
    </tr>
  );
}
