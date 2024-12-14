import React from 'react';
import type { Move } from '@/app/models/pokev4.type';

interface CellMachineProps {
  move: Move;
}

export default function CellMachine({
  move,
}: CellMachineProps) {
  if (move.machine?.number !== 0 && !move.machine?.number) {
    return null;
  }

  const machineNumber = Number(move.machine.number);

  const formattedMachineNumber = machineNumber >= 10
    ? `${machineNumber}`
    : `0${machineNumber}`;

  return (
    <>
      {formattedMachineNumber}
    </>
  );
}
