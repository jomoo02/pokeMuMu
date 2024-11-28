import React from 'react';
import type { VersionMove } from '@/app/models/detail.type';
import {
  categorizeVersionMove,
  checkEmptyVersionMove,
  groupMachineType,
} from '../utils/version-move';
import MethodMoveTable from './method-move-table';

interface VersionMoveListProps {
  versionMoveList: VersionMove;
}

export default function VersionMoveList({
  versionMoveList,
}: VersionMoveListProps) {
  if (checkEmptyVersionMove(versionMoveList)) {
    return (
      <div className="flex justify-center min-h-44 md:min-h-96 items-center py-3 px-2 font-semibold text-xl">
        non
      </div>
    );
  }

  const categorizedMoveList = categorizeVersionMove(versionMoveList);

  return (
    <div className="flex flex-wrap xl:py-3">
      <div className="grid w-full xl:w-1/2">
        {categorizedMoveList.map(({ method, moveList }) => (
          <MethodMoveTable
            moveMethod={method}
            />
        ))}
      </div>
    </div>
  )

}
