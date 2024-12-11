'use client';

import React from 'react';
import { PokeType } from '@/app/data/poke-type';
import type { Moves } from '@/app/models/detail.type';
import useMoveList from '../hooks/useMoveList';
import GenMoveList from './gen-move-list';
import ButtonGroup from './button-group';

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
      <div className={`flex gap-x-1.5 items-center px-2.5 lg:px-8 py-2.5 border-b-2 ${type}-border`}>
        <ButtonGroup.Gen
          type={type}
          gens={genList}
          targetGen={targetGen}
          setTargetGen={handleTargetGen}
        />
      </div>
      <GenMoveList
        key={targetGen}
        genMoves={targetGenMoveList}
        type={type}
      />
    </>
  );
}
