'use client';

import { PokeType } from '@/app/data/poke-type';
import type { Moves } from '@/app/models/detail.type';
import useMoveList from '../hooks/useMoveList';

interface MoveListProps {
  moves: Moves;
  type: PokeType;
}

export default function MoveList({
  moves,
  type,
}: MoveListProps) {
  const {
    genList,
    targetGen,
    targetGenMoveList,
    handleTargetGen,
  } = useMoveList(moves);

  return (
    <>
      <div>
      </div>    
    </>
  )
}
