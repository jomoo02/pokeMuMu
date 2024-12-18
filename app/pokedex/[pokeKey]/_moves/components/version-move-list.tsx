import React from 'react';
import type { VersionMove } from '@/app/models/pokev4.type';
import {
  categorizeVersionMove,
  checkEmptyVersionMove,
} from '../lib/version-move';
import MethodMoveTable from './method-move-table';

interface VersionMoveListProps {
  versionMoveList: VersionMove | undefined;
}

export default function VersionMoveList({
  versionMoveList,
}: VersionMoveListProps) {
  if (!versionMoveList || checkEmptyVersionMove(versionMoveList)) {
    return (
      <div className="flex justify-center min-h-44 md:min-h-96 items-center py-3 px-2 font-semibold text-xl">
        non
      </div>
    );
  }

  const {
    machineMoveList,
    methodMoveLst,
  } = categorizeVersionMove(versionMoveList);

  return (
    <div className="grid xl:grid-cols-2">
      <div className="overflow-x-hidden">
        {methodMoveLst.map(({ method, moveList }) => (
          <MethodMoveTable
            key={method}
            moveMethod={method}
            methodMoveList={moveList}
          />
        ))}
      </div>
      {machineMoveList.length > 0 && (
        <div className="overflow-x-hidden xl:grid xl:justify-end">
          {machineMoveList.map(({ method, moveList }) => (
            <MethodMoveTable
              key={method}
              moveMethod={method}
              methodMoveList={moveList}
            />
          ))}
        </div>
      )}
    </div>
  );
}
