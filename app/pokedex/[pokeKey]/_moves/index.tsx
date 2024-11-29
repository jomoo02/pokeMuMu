import React from 'react';
import { Moves } from '@/app/models/detail.type';
import { PokeType } from '@/app/data/poke-type';
import MoveList from './components/move-list';

interface PokeMovesProps {
  moves: Moves;
  type: PokeType;
}

export default function PokeMoves({
  moves,
  type,
}: PokeMovesProps) {
  if (!moves) {
    return null;
  }

  return (
    <div>
      <MoveList moves={moves} type={type} />
    </div>
  );
}
