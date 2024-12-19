import React from 'react';
import type { Moves } from '@/app/models/pokev4.type';
import useMoveList from '../hooks/useMoveList';
import GenMoveList from './gen-move-list';
import ButtonGroup from './button-group';

interface MoveListProps {
  moves: Moves;
}

export default function MoveList({
  moves,
}: MoveListProps) {
  const {
    genList,
    targetGen,
    targetGenMoveList,
    handleTargetGen,
  } = useMoveList(moves);

  return (
    <>
      <div className="px-2.5 lg:px-8 py-1 border-b-2 border-slate-500">
        <ButtonGroup.Gen
          gens={genList}
          targetGen={targetGen}
          setTargetGen={handleTargetGen}
        />
      </div>
      <GenMoveList
        key={targetGen}
        genMoves={targetGenMoveList}
      />
    </>
  );
}
