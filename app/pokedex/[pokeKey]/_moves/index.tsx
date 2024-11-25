import React from 'react';
import './styles/method-move-table.css';
import { Moves } from '@/app/models/detail.type';
import MethodMoveTable from './components/method-move-table';

interface PokeMovesProps {
  moves: Moves;
}

export default function PokeMoves({
  moves,
}: PokeMovesProps) {
  if (!moves) {
    return null;
  }

  const targetMove = moves.at(-1)?.genMoves[0].versionMoves['level-up'];

  return (
    <div>
      <MethodMoveTable targetMoveList={targetMove} moveMethod="level-up" />
    </div>
  );
}
