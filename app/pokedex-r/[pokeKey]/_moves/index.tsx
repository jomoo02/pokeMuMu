import React from 'react';
import { Moves } from '@/app/models/detail.type';
import { PokeType } from '@/app/data/poke-type';
import MoveList from './components/move-list';
import Header from '../components/header';

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
      <Header
        type={type}
        text="기술"
      />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <MoveList moves={moves} type={type} />
      </div>
    </div>
  );
}
