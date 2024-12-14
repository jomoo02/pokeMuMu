import React from 'react';
import { Moves } from '@/app/models/pokev4.type';
import MoveList from './components/move-list';
import Header from '../components/header';

interface PokeMovesProps {
  moves: Moves;
}

export default function PokeMoves({
  moves,
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
        <MoveList moves={moves} />
      </div>
    </div>
  );
}
