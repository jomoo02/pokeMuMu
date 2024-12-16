import React from 'react';
import { Moves } from '@/app/models/pokev4.type';
import MoveList from './components/move-list';
import Header from '../components/header';

interface PokeMovesProps {
  moves: Moves;
  order: number;
}

export default function PokeMoves({
  moves,
  order,
}: PokeMovesProps) {
  if (!moves) {
    return null;
  }

  return (
    <div>
      <Header
        text="기술"
      />
      <div className="border-2 border-t-0 rounded-b-sm">
        <MoveList moves={moves} key={order} />
      </div>
    </div>
  );
}
